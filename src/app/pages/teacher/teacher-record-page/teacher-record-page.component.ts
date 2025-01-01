import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DialogService } from '@tmf/shared';
import {
  GetCompletedMonthlyResponseModelDataCompletedReservesInner,
  TeacherTransRecordService
} from 'libs/openapi/src';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-teacher-record-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-record-page.component.html',
  styleUrl: './teacher-record-page.component.scss'
})
export default class TeacherRecordPageComponent {
  private teacherTransRecordService = inject(TeacherTransRecordService);
  private dialogService = inject(DialogService);
  completed_reserves = toSignal(
    this.teacherTransRecordService
      .apiTeacherTransRecordsCompletedMonthlyGet()
      .pipe(map((res) => res.data?.completed_reserves ?? []))
  );

  uncompleted_reserves = toSignal(
    this.teacherTransRecordService
      .apiTeacherTransRecordsUncompletedMonthlyGet()
      .pipe(map((res) => res.data?.uncompleted_reserves ?? []))
  );

  total_income = computed(() => {
    return this.completed_reserves()?.reduce((acc, reserve) => {
      return acc + reserve.price! / reserve.total!;
    }, 0);
  });

  expected_income = computed(() => {
    return (
      Math.round(
        (this.uncompleted_reserves()?.reduce((acc, reserve) => {
          return acc + reserve.price! / reserve.total!;
        }, 0) ?? 0) * 100
      ) / 100
    );
  });

  openAccountDialog() {
    this.dialogService.openAccountDialog();
  }

  downloadHistory() {
    // TODO: 下載歷史紀錄
  }
}
