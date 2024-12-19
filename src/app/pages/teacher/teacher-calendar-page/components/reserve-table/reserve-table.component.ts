import { NgClass } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { PaginationComponent } from '@tmf/libs-shared/components';
import { GetExpiredReservesResponseModelDataExpiredReservesInner } from 'libs/openapi/src';

@Component({
  selector: 'tmf-reserve-table',
  standalone: true,
  imports: [NgClass, PaginationComponent],
  templateUrl: './reserve-table.component.html',
  styleUrl: './reserve-table.component.scss'
})
export class ReserveTableComponent {
  totalCount = input.required<number>();
  tableReserves =
    input.required<GetExpiredReservesResponseModelDataExpiredReservesInner[]>();
  currentPage = signal(1);
  changePageEvent = output<number>();

  ngOnInit(): void {}

  pageChange(page: number) {
    this.currentPage.set(page);
    this.changePageEvent.emit(page);
  }
}
