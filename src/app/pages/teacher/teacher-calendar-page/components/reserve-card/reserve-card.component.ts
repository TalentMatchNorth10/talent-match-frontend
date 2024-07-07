import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GetExpiredReservesResponseModelDataExpiredReservesInner } from 'libs/openapi/src';

@Component({
  selector: 'tmf-reserve-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './reserve-card.component.html',
  styleUrl: './reserve-card.component.scss'
})
export class ReserveCardComponent {
  @Input({ required: true })
  reserve!: GetExpiredReservesResponseModelDataExpiredReservesInner;
  @Input() expired: boolean = false;
}
