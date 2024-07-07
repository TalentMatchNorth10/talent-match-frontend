import { DialogService } from 'src/app/shared/services/dialog.service';
import { NgClass } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import {
  GetCanReserveWeekResponseModelDataCanReserveWeekInner,
  TeacherReserveService
} from 'libs/openapi/src';

type WeekDay = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';

@Component({
  selector: 'tmf-can-reserve-time',
  standalone: true,
  imports: [NgClass],
  templateUrl: './can-reserve-time.component.html',
  styleUrl: './can-reserve-time.component.scss'
})
export class CanReserveTimeComponent {
  private teacherReserveService = inject(TeacherReserveService);
  private dialogService = inject(DialogService);
  isEditMode = signal(false);

  days = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
  hours = [9, 10, 11, 13, 14, 15, 16, 17, 19, 20];
  can_reserve_week: WritableSignal<GetCanReserveWeekResponseModelDataCanReserveWeekInner> =
    signal({
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: []
    });

  can_reserve_time: {
    time: string;
    statues: Array<{
      day: WeekDay;
      status: boolean;
    }>;
  }[] = [];

  isSelecting: WritableSignal<boolean> = signal(false);
  startSelect: WritableSignal<{
    week: WeekDay;
    hour: string;
    toggleTo: boolean;
  } | null> = signal(null);

  ngOnInit(): void {
    this.teacherReserveService
      .apiTeacherReservesCanReserveWeekGet()
      .subscribe((res) => {
        const [can_reserve_week] = res.data?.can_reserve_week || [];
        this.can_reserve_week.set(can_reserve_week);
        this.generateReservationStatus();
      });
    // 主要的轉換邏輯
  }

  generateReservationStatus() {
    this.can_reserve_time = this.hours.map((hour) => {
      // 將小時轉換成需要的時間格式
      const formattedHour = this.formatHour(hour);

      // 確認每一天是否有該小時的可預訂時段
      const status = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(
        (day) => {
          // 如果有該時段的話，回傳 'available'，否則回傳 'unavailable'
          return {
            day: day as WeekDay,
            status: this.can_reserve_week()[day as WeekDay]!.includes(hour)
              ? true
              : false
          };
        }
      );

      return {
        time: formattedHour,
        statues: status
      };
    });
  }

  formatHour(hour: number) {
    return `${hour.toString().padStart(2, '0')}:00`;
  }

  startSelection(week: any, day: any) {
    if (!this.isEditMode()) return;
    this.isSelecting.set(true);
    if (day.status) {
      day.status = false;
      this.startSelect.set({
        week: week,
        hour: day.time,
        toggleTo: false
      });
    } else {
      day.status = true;
      this.startSelect.set({
        week: week,
        hour: day.time,
        toggleTo: true
      });
    }
  }
  continueSelection(week: any, day: any) {
    if (!this.isSelecting()) return;
    if (this.startSelect()!.week !== week) return;
    day.status = this.startSelect()!.toggleTo;
  }
  endSelection(week: any, day: any) {
    this.isSelecting.set(false);
    this.startSelect.set(null);
  }

  toggleEditMode() {
    this.isEditMode.set(!this.isEditMode());
  }

  saveCanReserveTime() {
    const can_reserve_week = {
      mon: [] as number[],
      tue: [] as number[],
      wed: [] as number[],
      thu: [] as number[],
      fri: [] as number[],
      sat: [] as number[],
      sun: [] as number[]
    };
    this.can_reserve_time.forEach((hour) => {
      hour.statues.forEach((day) => {
        if (day.status) {
          can_reserve_week[day.day].push(parseInt(hour.time.split(':')[0]));
        }
      });
    });
    this.teacherReserveService
      .apiTeacherReservesCanReserveWeekPatch({
        updateCanReserveWeekRequestModel: {
          can_reserve_week: [can_reserve_week]
        }
      })
      .subscribe((res) => {
        this.dialogService.openAlertDialog({
          title: '成功',
          content: res.data?.message || '更新成功'
        });
        this.isEditMode.set(false);
      });
  }
}
