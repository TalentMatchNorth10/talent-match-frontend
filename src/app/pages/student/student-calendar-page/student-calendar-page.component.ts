import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  calendarOptions: CalendarOptions = {
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
    selectable: true
  };
}
