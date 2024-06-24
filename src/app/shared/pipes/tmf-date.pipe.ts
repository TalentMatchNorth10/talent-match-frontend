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

/**
 * mon -> 週一
 */
@Pipe({
  name: 'tmfWeek',
  standalone: true
})
export class TmfWeekPipe implements PipeTransform {
  constructor() {}

  transform(value: string): string {
    switch (value) {
      case 'mon':
        return '週一';
      case 'tue':
        return '週二';
      case 'wed':
        return '週三';
      case 'thu':
        return '週四';
      case 'fri':
        return '週五';
      case 'sat':
        return '週六';
      case 'sun':
        return '週日';
      default:
        return '';
    }
  }
}
