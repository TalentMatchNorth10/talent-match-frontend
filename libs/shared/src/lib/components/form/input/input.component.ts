import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Injector,
  Input,
  OnInit,
  forwardRef,
  inject
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'tmf-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
    <div class="relative pb-6">
      <input
        class="border-b-2 outline-none py-3 focus:border-tmf-orange-1 duration-75 w-full"
        [formControl]="control"
        [type]="type"
        [placeholder]="placeholder"
      />
      @if (control.touched && ngControl.control?.errors && errorMessage) {
        <p class="text-red-500 absolute bottom-0 text-[14px]">
          {{ errorMessage }}
        </p>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class InputComponent
  implements ControlValueAccessor, OnInit, AfterViewInit
{
  private inj = inject(Injector);

  ngControl!: NgControl;
  control = new FormControl(null);

  onChange: any = () => {};
  onTouched: any = () => {};

  @Input() placeholder = '請輸入';
  @Input() type: 'text' | 'password' = 'text';
  @Input() errorMessage: string = '';

  ngOnInit(): void {
    this.ngControl = this.inj.get<NgControl>(NgControl);
  }

  ngAfterViewInit(): void {
    this.control.valueChanges.subscribe((val) => {
      this.noticeValueChange(val);
    });
  }

  noticeValueChange(val: any): void {
    if (this.onChange && val !== this.ngControl.control?.value) {
      this.onChange(val);
    }
  }

  writeValue(value: any): void {
    if (value !== this.control.value) {
      this.control.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
