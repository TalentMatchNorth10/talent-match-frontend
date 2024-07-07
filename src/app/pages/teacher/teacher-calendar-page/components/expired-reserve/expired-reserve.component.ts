import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  WritableSignal,
  computed,
  inject,
  signal
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  SelectComponent,
  OptionComponent,
  PaginationComponent
} from '@tmf/libs-shared/components';
import { ReserveCardComponent } from '../reserve-card/reserve-card.component';
import {
  GetExpiredReservesResponseModelDataExpiredReservesInner,
  GetSelectListResponseModelDataCourseListInner,
  GetSelectListResponseModelDataStudentListInner,
  TeacherReserveService
} from 'libs/openapi/src';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'tmf-expired-reserve',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    OptionComponent,
    PaginationComponent,
    ReactiveFormsModule,
    ReserveCardComponent
  ],
  templateUrl: './expired-reserve.component.html',
  styles: `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .spin {
      animation: spin 1s linear infinite;
      border-top-color: transparent;
    }
    .afterimage {
      animation: spin 1s linear infinite;
      opacity: 0.5;
      border-top-color: transparent;
    }
  `
})
export class ExpiredReserveComponent {
  private teacherReserveService = inject(TeacherReserveService);
  private fb = inject(FormBuilder);
  private dialogService = inject(DialogService);
  @Input({ required: true })
  courseList: Array<GetSelectListResponseModelDataCourseListInner> = [];
  @Input({ required: true })
  studentList: Array<GetSelectListResponseModelDataStudentListInner> = [];
  /** 取得已逾期預約 */
  expired_reserves: WritableSignal<
    Array<GetExpiredReservesResponseModelDataExpiredReservesInner>
  > = signal([]);

  fg = this.fb.group({
    course: [''],
    student: ['']
  });

  totalCount = signal(0);
  currentPage = signal(1);
  courseSig = toSignal(
    this.fg.controls.course.valueChanges.pipe(
      tap(() => this.fg.controls.student.setValue(''))
    )
  );
  studentSig = toSignal(this.fg.controls.student.valueChanges);

  filterStudentList = computed(() => {
    const courseId = this.courseSig();
    const studentList = this.studentList.find(
      (student) => student.course_id === courseId
    );
    return studentList?.students || [];
  });

  isLoading = signal(false);

  ngOnInit(): void {
    this.fetchExpiredReserves();
  }

  pageChange(page: number) {
    this.currentPage.set(page);
    this.fetchExpiredReserves();
  }

  searchReserves() {
    this.currentPage.set(1);
    this.fetchExpiredReserves();
  }

  fetchExpiredReserves() {
    this.isLoading.set(true);
    this.teacherReserveService
      .apiTeacherReservesExpiredReservesGet({
        page: this.currentPage(),
        courseId: this.courseSig() === 'all' ? '' : this.courseSig()!,
        studentId: this.studentSig() === 'all' ? '' : this.studentSig()!
      })
      .subscribe({
        next: (res) => {
          this.expired_reserves.set(res.data?.expired_reserves || []);
          this.totalCount.set(res.data?.totalCount || 0);
        },
        complete: () => {
          this.isLoading.set(false);
        }
      });
  }

  completeReserve(
    reserve: GetExpiredReservesResponseModelDataExpiredReservesInner
  ) {
    const waitStudentConfirm = reserve.teacher_status === 'completed';

    if (waitStudentConfirm) return;

    this.dialogService
      .openConfirmDialog({
        title: '完成課程',
        content: '確認完成預約？',
        confirmBtnText: '確認',
        btnType: 'primary'
      })
      .subscribe((result) => {
        if (result) {
          this.teacherReserveService
            .apiTeacherReservesReservesPatch({
              updateReserveRequestModel: {
                reserve_id: reserve._id
              }
            })
            .subscribe(() => {
              this.fetchExpiredReserves();
            });
        }
      });
  }
}
