import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  WritableSignal,
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
  TeacherReserveService,
  GetReservesResponseModelDataReservesInner,
  GetSelectListResponseModelDataCourseListInner
} from 'libs/openapi/src';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tmf-recent-reserve',
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
  templateUrl: './recent-reserve.component.html'
})
export class RecentReserveComponent {
  private teacherReserveService = inject(TeacherReserveService);
  private fb = inject(FormBuilder);

  @Input({ required: true })
  courseList: Array<GetSelectListResponseModelDataCourseListInner> = [];

  fg = this.fb.group({
    range: ['twoDays'],
    course: ['']
  });

  totalCount = signal(0);
  rangeSig = toSignal(this.fg.controls.range.valueChanges);
  courseSig = toSignal(this.fg.controls.course.valueChanges);
  currentPage = signal(1);

  /** 取得近期預約 */
  reserves: WritableSignal<Array<GetReservesResponseModelDataReservesInner>> =
    signal([]);

  ngOnInit(): void {
    this.fetchReserves();
  }

  pageChange(page: number) {
    this.currentPage.set(page);
    this.fetchReserves();
  }

  searchReserves() {
    this.currentPage.set(1);
    this.fetchReserves();
  }

  fetchReserves() {
    this.teacherReserveService
      .apiTeacherReservesReservesGet({
        courseId: this.courseSig() === 'all' ? '' : this.courseSig()!,
        range: this.rangeSig()!,
        page: this.currentPage()
      })
      .subscribe((res) => {
        this.reserves.set(res.data?.reserves || []);
        this.totalCount.set(res.data?.totalCount || 0);
      });
  }
}
