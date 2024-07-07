import { TeacherReserveService } from './../../../../../libs/openapi/src/api/teacher-reserve.service';
import { CommonModule } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  GetSelectListResponseModelDataCourseListInner,
  GetSelectListResponseModelDataStudentListInner
} from 'libs/openapi/src';
import { ExpiredReserveComponent } from './components/expired-reserve/expired-reserve.component';
import { RecentReserveComponent } from './components/recent-reserve/recent-reserve.component';
import { ReservedBlockComponent } from './components/reserved-block/reserved-block.component';
import { CanReserveTimeComponent } from './components/can-reserve-time/can-reserve-time.component';

@Component({
  selector: 'app-teacher-calendar-page',
  standalone: true,
  imports: [
    CommonModule,
    RecentReserveComponent,
    ExpiredReserveComponent,
    ReservedBlockComponent,
    CanReserveTimeComponent
  ],
  templateUrl: './teacher-calendar-page.component.html',
  styleUrl: './teacher-calendar-page.component.scss'
})
export default class TeacherCalendarPageComponent {
  private teacherReserveService = inject(TeacherReserveService);

  courseList: Array<GetSelectListResponseModelDataCourseListInner> = [];
  studentList: Array<GetSelectListResponseModelDataStudentListInner> = [];

  ngOnInit(): void {
    this.teacherReserveService
      .apiTeacherReservesCourseListGet()
      .subscribe((res) => {
        this.courseList = res.data?.courseList || [];
        this.studentList = res.data?.studentList || [];
      });
  }
}
