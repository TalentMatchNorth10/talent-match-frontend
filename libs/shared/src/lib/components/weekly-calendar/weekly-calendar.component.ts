import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReserveTagComponent } from './reserve-tag.component';
import { TmfWeekPipe } from 'src/app/shared/pipes/tmf-date.pipe';

type Status = 'unavailable' | 'available' | 'reserved';

interface Slot {
  time: string;
  status: Status;
}

interface DaySchedule {
  week: string;
  date: string;
  slots: Slot[];
}

@Component({
  selector: 'tmf-weekly-calendar',
  standalone: true,
  imports: [CommonModule, NgClass, ReserveTagComponent, TmfWeekPipe],
  templateUrl: './weekly-calendar.component.html',
  styleUrl: './weekly-calendar.component.css'
})
export class WeeklyCalendarComponent {
  times = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '19:00',
    '20:00'
  ];

  @Input() schedule: any[] = [];

  preprocessedSchedule: {
    time: string;
    statuses: { status: Status }[];
  }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.preprocessSchedule();
  }

  preprocessSchedule(): void {
    const times = [
      '09:00',
      '10:00',
      '11:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '19:00',
      '20:00'
    ];
    this.preprocessedSchedule = times.map((time) => ({
      time,
      statuses: this.schedule.map((day) => {
        const slot = day.slots.find((slot: any) => slot.time === time);
        const status = slot ? slot.status : ('available' as Status);
        return { status };
      })
    }));
  }
}
