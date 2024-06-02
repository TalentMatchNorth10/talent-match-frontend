import { CommonModule } from '@angular/common';
import { Component, WritableSignal, computed, signal } from '@angular/core';
import { ReserveDatepickerComponent } from '@tmf/libs-shared/components/reserve-datepicker/reserve-datepicker.component';

@Component({
  selector: 'app-student-courses-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-courses-page.component.html',
  styleUrl: './student-courses-page.component.scss'
})
export default class StudentCoursesPageComponent {
  courses = [
    {
      title: '西點製作',
      category: '廚藝',
      location: '高雄',
      instructor: '王太郎',
      remainingClasses: 3,
      isExpanded: false,
      sessions: [
        {
          date: '4/5 20:00~21:00',
          status: '已預約',
          statusClass: 'text-green-500'
        },
        {
          date: '3/28 20:00~21:00',
          status: '已完課',
          statusClass: 'text-gray-500',
          action: '完成課程'
        },
        {
          date: '3/27 20:00~21:00',
          status: '已完課',
          statusClass: 'text-gray-500',
          action: '給予評價'
        },
        {
          date: '3/26 20:00~21:00',
          status: '已完課',
          statusClass: 'text-gray-500',
          action: '已評價'
        }
      ]
    },
    {
      title: '專業刀工教學',
      category: '廚藝',
      location: '高雄',
      instructor: '王太郎',
      isExpanded: false,
      sessions: []
    }
  ];

  ngOnInit(): void {}

  toggleExpand(course: any) {
    course.isExpanded = !course.isExpanded;
  }
}
