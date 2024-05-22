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
