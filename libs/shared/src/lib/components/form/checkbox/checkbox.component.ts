import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
  forwardRef,
  inject
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  ReactiveFormsModule,
  NgControl
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { OptionType } from '../share';

@Component({
  selector: 'tmf-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  template: `
    @if (single) {
      <div
        [ngClass]="{
          'flex-col gap-y-1': direct === 'vertical',
          'flex-row-reverse gap-x-2': direct === 'horizontal'
        }"
        class="flex items-center"
      >
        <p>
          {{ label }}
        </p>
        <label
          [for]="id"
          [ngClass]="{
            'bg-tmf-orange-1': value && ngControl.control?.enabled,
            'border border-tmf-gray-5 bg-white':
              !value && ngControl.control?.enabled,
            '!cursor-not-allowed bg-tmf-gray-5': ngControl.control?.disabled
          }"
          class="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded duration-100"
        >
          <span
            [ngClass]="{
              'text-white': value,
              hidden: !value
            }"
            class="material-icons-outlined select-none text-[14px]"
            >done</span
          >
        </label>
        <input
          (change)="onCheckboxChange()"
          [id]="id"
          [checked]="value"
          [disabled]="disabled"
          type="checkbox"
          class="hidden"
        />
      </div>
    } @else {
      <div
        [ngClass]="{
          'flex-col gap-y-1': direct === 'vertical',
          'flex-row gap-x-1': direct === 'horizontal'
        }"
        class="flex items-center"
      >
        <p>
          {{ label }}
        </p>
        <div class="flex flex-wrap items-center gap-3">
          @for (option of options; track option; let index = $index) {
            <div class="flex items-center gap-2">
              <label
                [for]="id + index"
                [ngClass]="{
                  'bg-tmf-orange-1':
                    isSelected(option) && ngControl.control?.enabled,
                  'border border-tmf-gray-5 bg-white':
                    !isSelected(option) && ngControl.control?.enabled,
                  '!cursor-not-allowed bg-tmf-gray-5':
                    ngControl.control?.disabled
                }"
                class="flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded duration-100"
              >
                <span
                  [ngClass]="{
                    'text-white': isSelected(option),
                    hidden: !isSelected(option)
                  }"
                  class="material-icons-outlined select-none text-[14px]"
                  >done</span
                >
              </label>
              <input
                (change)="onCheckboxChange(option)"
                [id]="id + index"
                [checked]="isSelected(option)"
                [disabled]="disabled"
                type="checkbox"
                class="hidden"
              />
              <p>
                {{ option.label }}
              </p>
            </div>
          }
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  private inj = inject(Injector);

  @Input() label = '';
  @Input() direct: 'vertical' | 'horizontal' = 'vertical';
  @Input() single: boolean = true;
  @Input() options: OptionType[] = [];

  @Output() checkedChange = new EventEmitter<any>();

  id = uuidv4();
  value: boolean = false;
  disabled: boolean = false;
  ngControl!: NgControl;

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    this.ngControl = this.inj.get<NgControl>(NgControl);
  }

  isSelected(option?: OptionType): boolean {
    return this.ngControl.control?.value?.includes(option?.value);
  }

  onCheckboxChange(option?: OptionType): void {
    if (this.single) {
      this.value = !this.value;
      this.onChange(this.value);
      this.checkedChange.emit(this.value);
    } else {
      const currentValue = this.ngControl.control?.value;
      if (!(currentValue instanceof Array)) {
        this.onChange([option?.value]);
        this.checkedChange.emit([option?.value]);
      }

      let newValue;
      if (currentValue.includes(option?.value)) {
        newValue = currentValue.filter((value: any) => value !== option?.value);
      } else {
        newValue = [...currentValue, option?.value];
      }
      this.onChange(newValue);
      this.checkedChange.emit(newValue);
    }
    this.onTouched();
  }

  writeValue(value: any): void {
    if (this.single) {
      this.value = value;
    } else {
      if (!(value instanceof Array)) {
        throw new Error('value must be array');
      }
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
