import { StudentService } from './../../../../../libs/openapi/src/api/student.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-student-calendar-page',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './student-calendar-page.component.html',
  styleUrl: './student-calendar-page.component.scss'
})
export default class StudentCalendarPageComponent {
  private studentService = inject(StudentService);

  calendarOptions!: CalendarOptions;

  ngOnInit(): void {
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
        const [course] = info.event.title.split(' ');
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

  handleDatesSet(currentMonth: string) {
    this.studentService
      .apiStudentCalendarGet({ date: currentMonth })
      .subscribe((res) => {
        const events = this.transformDataToEvents(res.data);
        this.calendarOptions.events = events;
      });
  }

  transformDataToEvents(data: any): any[] {
    const events: any = [];

    data.calendar.forEach((reserve: any) => {
      const { reserve_time, course_name, student_name } = reserve;
      const [date, time] = reserve_time.split('T');
      const startDateTime = `${date}T${time.slice(0, 5)}`;
      const endDateTime = `${date}T${this.calculateEndTime(startDateTime)}`;
      events.push({
        title: course_name,
        start: startDateTime,
        end: endDateTime
      });
    });

    return events;
  }

  private calculateEndTime(startTime: string): string {
    const start = new Date(startTime);
    start.setHours(start.getHours() + 1);
    const end = start.toLocaleTimeString('en-US', { hour12: false });
    return end.slice(0, 5);
  }
}
