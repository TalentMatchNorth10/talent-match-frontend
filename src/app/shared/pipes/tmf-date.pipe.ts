import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'tmfDate',
  standalone: true
})
export class TmfDatePipe implements PipeTransform {
  constructor() {}

  transform(value: string | undefined): string {
    const date = new Date(value!);
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    return localDate.toISOString().split('T')[0];
  }
}

/**
 * 2024-06-11T13:00:00.000Z -> 2024-06-11 13:00
 */
@Pipe({
  name: 'tmfDateTime',
  standalone: true
})
export class TmfDateTimePipe implements PipeTransform {
  constructor() {}

  transform(value: string | undefined): string {
    const date = value!.split('T')[0];
    const time = value!.split('T')[1].split('.')[0].slice(0, 5);
    return `${date} ${time}`;
  }
}
