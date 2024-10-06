import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl
} from '@angular/forms';

@Component({
  selector: 'tmf-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="switch"
      [ngClass]="{
        'switch-on switch-enabled': value,
        'switch-disabled': isDisabled
      }"
      (click)="toggleSwitch()"
    >
      <div class="switch-circle"></div>
    </div>
  `,
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() set isDisabled(value: boolean) {
    this._disabled = value;
    setTimeout(() => {
      this.setDisabledState!(value);
    });
  }

  @Output() valeuChange = new EventEmitter<boolean>();

  private _disabled: boolean = false;
  value: boolean = false;

  get isDisabled(): boolean {
    return this._disabled;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  toggleSwitch() {
    if (!this.isDisabled) {
      this.value = !this.value;
      this.valeuChange.emit(this.value);
      this.onChange(this.value);
      this.onTouched();
    }
  }

  onChange = (value: any) => {};
  onTouched = () => {};
}
