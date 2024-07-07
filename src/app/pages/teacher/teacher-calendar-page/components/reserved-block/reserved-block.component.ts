import {
  Component,
  Input,
  WritableSignal,
  computed,
  inject,
  signal
} from '@angular/core';
import { ReserveTableComponent } from '../reserve-table/reserve-table.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent, OptionComponent } from '@tmf/libs-shared/components';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  GetExpiredReservesResponseModelDataExpiredReservesInner,
  GetSelectListResponseModelDataCourseListInner,
  GetSelectListResponseModelDataStudentListInner,
  TeacherReserveService
} from 'libs/openapi/src';
import { tap } from 'rxjs';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tmf-reserved-block',
  standalone: true,
  imports: [
    SelectComponent,
    OptionComponent,
    ReactiveFormsModule,
    FullCalendarModule,
    ReserveTableComponent
  ],
  templateUrl: './reserved-block.component.html',
  styleUrl: './reserved-block.component.scss'
})
export class ReservedBlockComponent {
  private teacherReserveService = inject(TeacherReserveService);
  private fb = inject(FormBuilder);
  calendarOptions!: CalendarOptions;
  @Input({ required: true })
  courseList: Array<GetSelectListResponseModelDataCourseListInner> = [];
  @Input({ required: true })
  studentList: Array<GetSelectListResponseModelDataStudentListInner> = [];
  tableReserves: WritableSignal<
    Array<GetExpiredReservesResponseModelDataExpiredReservesInner>
  > = signal([]);
  tableCount = signal(0);
  fg = this.fb.group({
    course: [''],
    student: [''],
    viewMode: ['table']
  });

  courseSig = toSignal(
    this.fg.controls.course.valueChanges.pipe(
      tap(() => this.fg.controls.student.setValue(''))
    )
  );
  studentSig = toSignal(this.fg.controls.student.valueChanges);
  isLoading = signal(false);

  filterStudentList = computed(() => {
    const courseId = this.courseSig();
    const studentList = this.studentList.find(
      (student) => student.course_id === courseId
    );
    return studentList?.students || [];
  });

  ngOnInit(): void {
    this.fetchReserveTable();

    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, timeGridPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      },
      locale: 'zh-tw',
      showNonCurrentDates: true,
      weekends: true,
      selectable: true,
      allDaySlot: false,
      eventContent: function (info) {
        const [course, name] = info.event.title.split(' ');
        const startTime = info.event.start?.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        const endTime = info.event.end?.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        return {
          html: `
              <div style="display: flex; flex-direction: column;">
                <p class="">${startTime} - ${endTime}</p>
                <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${course}</div>
                <div>${name}</div>
              </div>
            `
        };
      },
      dayMaxEventRows: true, // for all non-TimeGrid views
      dayMaxEvents: 2, // allow "more" link when too many events
      views: {
        timeGrid: {
          dayMaxEventRows: 1, // adjust to 6 only for timeGridWeek/timeGridDay
          dayMaxEvents: 1 // adjust to 6 only for timeGridWeek/timeGridDay
        }
      },
      moreLinkContent: function (args) {
        return '+' + args.num + ' 筆預約';
      },
      windowResize: ({ view }) => {
        if (window.innerWidth <= 1024) {
          view.calendar.changeView('dayGridMonth');
        }
        this.handleWindowResize(view);
      },
      datesSet: ({ view }) => {
        const currentMonth = view.calendar
          .getDate()
          .toLocaleDateString()
          .split('/')
          .join('-')
          .slice(0, 6);
        this.handleDatesSet(currentMonth);
      }
    };

    this.fg.controls.viewMode.valueChanges.subscribe((value) => {
      if (value === 'table') {
        this.fg.controls.course.setValue('');
        this.fg.controls.student.setValue('');
        this.fetchReserveTable();
      }
    });
  }

  fetchReserveTable(page: number = 1) {
    this.isLoading.set(true);
    this.teacherReserveService
      .apiTeacherReservesListGet({
        studentId: this.studentSig() === 'all' ? '' : this.studentSig()!,
        courseId: this.courseSig() === 'all' ? '' : this.courseSig()!,
        page
      })
      .subscribe((res) => {
        const { reserves, totalCount } = res.data!;
        console.log('reserves', reserves, 'totalCount', totalCount);
        this.tableReserves.set(reserves!);
        this.tableCount.set(totalCount!);
        this.isLoading.set(false);
      });
  }

  changeTablePage(page: number) {
    this.fetchReserveTable(page);
  }

  handleDatesSet(currentMonth: string) {
    this.teacherReserveService
      .apiTeacherReservesCalendarGet({
        date: currentMonth
      })
      .subscribe((res) => {
        const events = this.transformDataToEvents(res.data);
        this.calendarOptions.events = events;
      });
  }

  getHeaderToolbar() {
    if (window.innerWidth <= 1024) {
      return {
        left: 'dayGridMonth',
        center: 'title',
        right: 'prev,next'
      };
    } else {
      return {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      };
    }
  }

  handleWindowResize(view: any) {
    this.calendarOptions.headerToolbar = this.getHeaderToolbar();
  }

  transformDataToEvents(data: any): any[] {
    const events: any = [];

    data.calendar.forEach((day: any) => {
      const date = day.date;
      day.courses.forEach((course: any) => {
        const courseName = course.courseName;
        course.students.forEach((student: any) => {
          const studentName = student.studentName;
          const time = student.time;
          const startDateTime = `${date}T${time}`;
          const endDateTime = `${date}T${this.calculateEndTime(startDateTime)}`;

          events.push({
            title: `${courseName} ${studentName}`,
            start: startDateTime,
            end: endDateTime
          });
        });
      });
    });

    return events;
  }

  private calculateEndTime(startTime: string): string {
    console.log('startTime', startTime);
    const start = new Date(startTime);
    start.setHours(start.getHours() + 1);
    const end = start.toLocaleTimeString('en-US', { hour12: false });
    return end.slice(0, 5);
  }
}
