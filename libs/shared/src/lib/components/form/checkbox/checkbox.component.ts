import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnInit,
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
      <label
        [for]="id"
        [ngClass]="{
          'bg-tmf-orange-1': value && ngControl.control?.enabled,
          'border border-tmf-gray-5 bg-white':
            !value && ngControl.control?.enabled,
          'bg-tmf-gray-4 cursor-not-allowed': ngControl.control?.disabled
        }"
        class="rounded flex items-center justify-center w-[20px] h-[20px] cursor-pointer duration-100"
      >
        <span
          [ngClass]="{
            'text-white': value,
            hidden: !value
          }"
          class="material-icons-outlined text-[14px] select-none"
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

  id = uuidv4();
  value: boolean = false;
  disabled: boolean = false;
  ngControl!: NgControl;

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    this.ngControl = this.inj.get<NgControl>(NgControl);
  }

  onCheckboxChange(): void {
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(value: boolean): void {
    this.value = value;
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
