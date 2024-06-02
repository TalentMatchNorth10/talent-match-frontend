import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ReserveTagComponent } from './reserve-tag.component';

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
  imports: [CommonModule, NgClass, ReserveTagComponent],
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

  schedule: DaySchedule[] = [
    {
      week: '週日',
      date: '2024-03-31',
      slots: [
        { time: '09:00', status: 'unavailable' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'available' },
        { time: '13:00', status: 'available' },
        { time: '14:00', status: 'available' },
        { time: '15:00', status: 'available' },
        { time: '16:00', status: 'available' },
        { time: '17:00', status: 'unavailable' },
        { time: '19:00', status: 'unavailable' },
        { time: '20:00', status: 'unavailable' }
      ]
    },
    {
      week: '週一',
      date: '2024-04-01',
      slots: [
        { time: '09:00', status: 'unavailable' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'available' },
        { time: '13:00', status: 'available' },
        { time: '14:00', status: 'available' },
        { time: '15:00', status: 'available' },
        { time: '16:00', status: 'available' },
        { time: '17:00', status: 'unavailable' },
        { time: '19:00', status: 'unavailable' },
        { time: '20:00', status: 'unavailable' }
      ]
    },
    {
      week: '週二',
      date: '2024-04-02',
      slots: [
        { time: '09:00', status: 'unavailable' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'reserved' },
        { time: '13:00', status: 'reserved' },
        { time: '14:00', status: 'reserved' },
        { time: '15:00', status: 'available' },
        { time: '16:00', status: 'available' },
        { time: '17:00', status: 'available' },
        { time: '19:00', status: 'unavailable' },
        { time: '20:00', status: 'unavailable' }
      ]
    },
    {
      week: '週三',
      date: '2024-04-03',
      slots: [
        { time: '09:00', status: 'available' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'available' },
        { time: '13:00', status: 'available' },
        { time: '14:00', status: 'available' },
        { time: '15:00', status: 'available' },
        { time: '16:00', status: 'available' },
        { time: '17:00', status: 'available' },
        { time: '19:00', status: 'unavailable' },
        { time: '20:00', status: 'unavailable' }
      ]
    },
    {
      week: '週四',
      date: '2024-04-04',
      slots: [
        { time: '09:00', status: 'available' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'available' },
        { time: '13:00', status: 'available' },
        { time: '14:00', status: 'available' },
        { time: '15:00', status: 'available' },
        { time: '16:00', status: 'available' },
        { time: '17:00', status: 'available' },
        { time: '19:00', status: 'unavailable' },
        { time: '20:00', status: 'unavailable' }
      ]
    },
    {
      week: '週五',
      date: '2024-04-05',
      slots: [
        { time: '09:00', status: 'available' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'reserved' },
        { time: '13:00', status: 'reserved' },
        { time: '14:00', status: 'reserved' },
        { time: '15:00', status: 'available' },
        { time: '16:00', status: 'available' },
        { time: '17:00', status: 'available' },
        { time: '19:00', status: 'unavailable' },
        { time: '20:00', status: 'unavailable' }
      ]
    },
    {
      week: '週六',
      date: '2024-04-06',
      slots: [
        { time: '09:00', status: 'unavailable' },
        { time: '10:00', status: 'available' },
        { time: '11:00', status: 'available' },
        { time: '13:00', status: 'available' },
        { time: '14:00', status: 'available' },
        { time: '15:00', status: 'available' },
        { time: '16:00', status: 'available' },
        { time: '17:00', status: 'available' },
        { time: '19:00', status: 'unavailable' },
        { time: '20:00', status: 'unavailable' }
      ]
    }
  ];

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
        const slot = day.slots.find((slot) => slot.time === time);
        const status = slot ? slot.status : ('available' as Status);
        return { status };
      })
    }));
  }
}
