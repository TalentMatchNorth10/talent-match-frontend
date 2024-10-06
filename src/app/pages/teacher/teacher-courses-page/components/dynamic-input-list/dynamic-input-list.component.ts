import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-input-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicInputListComponent),
      multi: true
    }
  ],
  template: `
    <div class="mb-2 flex items-center justify-start gap-2">
      <div class="flex flex-col">
        <p>
          <span *ngIf="label" class="select-label">{{ label }}</span>
          <span *ngIf="isRequired" class="text-red-500">*</span>
        </p>
      </div>
      <button
        type="button"
        (click)="addPriceQuantity()"
        [disabled]="disabled"
        class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-tmf-gray-3"
      >
        <span class="material-icons text-[16px]"> add </span>
      </button>
    </div>
    <div class="flex max-w-[600px] flex-col gap-y-4">
      <div
        *ngFor="let item of dataList; let i = index"
        class="flex max-w-full flex-grow items-center"
      >
        <!-- 隱藏的 _id -->
        <input type="hidden" [value]="item[idKey]" />

        <label class="mr-1 whitespace-nowrap text-[14px] leading-4"
          >{{ itemLabel1 }}：</label
        >
        <div
          class="input-container mr-2"
          [ngClass]="{
            'cursor-not-allowed !bg-tmf-gray-5': disabled
          }"
        >
          <input
            class="input"
            [placeholder]="itemPlaceHolder1"
            [type]="itemType1"
            [ngClass]="{
              'cursor-not-allowed bg-tmf-gray-5 text-tmf-gray-3': disabled
            }"
            [disabled]="disabled"
            [(ngModel)]="item[this.itemKey1]"
            (ngModelChange)="updateFormControlValue()"
          />
        </div>

        <label class="mr-1 whitespace-nowrap text-[14px] leading-4"
          >{{ itemLabel2 }}：</label
        >
        <div
          class="input-container mr-2"
          [ngClass]="{
            'cursor-not-allowed !bg-tmf-gray-5': disabled
          }"
        >
          <input
            class="input"
            [placeholder]="itemPlaceHolder2"
            [type]="itemType2"
            [ngClass]="{
              'cursor-not-allowed bg-tmf-gray-5 text-tmf-gray-3': disabled
            }"
            [disabled]="disabled"
            [(ngModel)]="item[this.itemKey2]"
            (ngModelChange)="updateFormControlValue()"
          />
        </div>

        <!-- 刪除按鈕，使用 Google Material Icon -->
        <button
          type="button"
          (click)="removePriceQuantity(i)"
          [disabled]="disabled"
          class="text-2xl font-semibold text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:text-tmf-gray-3"
        >
          <span class="material-icons"> close </span>
        </button>
      </div>
    </div>
  `,
  styleUrl: './dynamic-input-list.component.css'
})
export class DynamicInputListComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() info = '';
  @Input() isRequired: boolean = false;

  @Input() idKey = '';
  @Input() itemKey1 = '';
  @Input() itemLabel1 = '';
  @Input() itemPlaceHolder1 = '';
  @Input() itemType1: 'number' | 'text' | 'file' = 'text';
  @Input() itemKey2 = '';
  @Input() itemLabel2 = '';
  @Input() itemPlaceHolder2 = '';
  @Input() itemType2: 'number' | 'text' | 'file' = 'text';

  dataList: any[] = [];
  disabled = false;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {}

  addPriceQuantity(): void {
    this.dataList.push({
      [this.idKey]: null,
      [this.itemKey1]: null,
      [this.itemKey2]: null
    });
    this.updateFormControlValue();
  }

  removePriceQuantity(index: number): void {
    this.dataList.splice(index, 1);
    this.updateFormControlValue();
  }

  updateFormControlValue(): void {
    this.onChange(this.dataList);
    this.onTouched();
  }

  writeValue(value: any): void {
    if (value) {
      this.dataList = value.map((item: any) => {
        return {
          [this.idKey]: item[this.idKey],
          [this.itemKey1]: item[this.itemKey1],
          [this.itemKey2]: item[this.itemKey2]
        };
      });
    } else {
      this.dataList = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
