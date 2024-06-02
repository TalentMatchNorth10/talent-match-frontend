import { NgClass } from '@angular/common';
import { Component, WritableSignal, computed, signal } from '@angular/core';

interface Day {
  year: number;
  month: number;
  date: number;
  currentMonth: boolean;
  disabled: boolean;
}

@Component({
  selector: 'tmf-reserve-datepicker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './reserve-datepicker.component.html',
  styleUrl: './reserve-datepicker.component.css'
})
export class ReserveDatepickerComponent {
  currentYear: WritableSignal<number> = signal(new Date().getFullYear());
  currentMonth: WritableSignal<number> = signal(new Date().getMonth());
  days: WritableSignal<Day[]> = signal([]);
  currentDate: WritableSignal<Day | null> = signal(null);
  currentTime: WritableSignal<string | null> = signal(null);
  // TODO 這裡的時間應該要從後端取得，先暫時寫死
  morningTimes = ['09:00', '10:00', '11:00'];
  afternoonTimes = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  eveningTimes = ['18:00', '19:00', '20:00', '21:00'];

  selectedReseveTime = computed(() => {
    if (this.currentDate()) {
      const zeroPad = (num: number) => String(num).padStart(2, '0');
      return `${this.currentDate()!.year}-${zeroPad(this.currentDate()!.month + 1)}-${zeroPad(this.currentDate()!.date)}T${this.currentTime()}:00`;
    } else {
      return '';
    }
  });

  btnDisabled = computed(() => {
    return !this.currentDate() || !this.currentTime();
  });

  ngOnInit(): void {
    this.generateDays(this.currentYear(), this.currentMonth());
  }

  generateDays(year: number, month: number): void {
    const today = new Date();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const lastDatePrevMonth = new Date(year, month, 0).getDate();

    const days = [];

    // 上個月日期
    for (let i = firstDay - 1; i >= 0; i--) {
      let prevMonth = month - 1;
      let prevYear = year;
      if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
      }
      const date = new Date(prevYear, prevMonth, lastDatePrevMonth - i);
      days.push({
        year: prevYear,
        month: prevMonth,
        date: lastDatePrevMonth - i,
        currentMonth: false,
        disabled: date < today
      });
    }

    // 本月日期
    for (let i = 1; i <= lastDate; i++) {
      const date = new Date(year, month, i);
      days.push({
        year: year,
        month: month,
        date: i,
        currentMonth: true,
        disabled: date < today
      });
    }

    // 下個月日期
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      let nextMonth = month + 1;
      let nextYear = year;
      if (nextMonth > 11) {
        nextMonth = 0;
        nextYear++;
      }
      const date = new Date(nextYear, nextMonth, i);
      days.push({
        year: nextYear,
        month: nextMonth,
        date: i,
        currentMonth: false,
        disabled: date < today
      });
    }

    this.days.set(days);
  }

  previousMonth(): void {
    if (this.currentMonth() > 0) {
      this.currentMonth.set(this.currentMonth() - 1);
    } else {
      this.currentMonth.set(11);
      this.currentYear.set(this.currentYear() - 1);
    }
    this.generateDays(this.currentYear(), this.currentMonth());
  }

  nextMonth(): void {
    if (this.currentMonth() < 11) {
      this.currentMonth.set(this.currentMonth() + 1);
    } else {
      this.currentMonth.set(0);
      this.currentYear.set(this.currentYear() + 1);
    }
    this.generateDays(this.currentYear(), this.currentMonth());
  }

  selectDate(day: Day): void {
    if (day.disabled) return;
    this.currentDate.set(day);
    if (!day.currentMonth) {
      if (day.date < 15) {
        // 下個月的日期
        this.nextMonth();
      } else {
        // 上個月的日期
        this.previousMonth();
      }
    }
  }

  selectTime(time: string): void {
    this.currentTime.set(time);
  }

  reset(): void {
    this.currentDate.set(null);
    this.currentTime.set(null);
  }

  bookNow(): void {
    console.log(this.selectedReseveTime());
  }
}
