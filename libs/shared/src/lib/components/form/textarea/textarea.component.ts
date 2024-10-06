import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tmf-textarea',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-1 flex flex-col">
      <p>
        <span *ngIf="label" class="select-label">{{ label }}</span>
        <span *ngIf="isRequired" class="text-red-500">*</span>
      </p>
      <p *ngIf="info" class="mb-2 ml-2 text-sm text-gray-500">{{ info }}</p>
    </div>
    <textarea
      #textarea
      class="w-full resize-none rounded-md border border-tmf-gray-4 p-2 outline-none focus:border-tmf-orange-1"
      (input)="onInput($event)"
      [ngClass]="{
        '!cursor-not-allowed bg-tmf-gray-5 !text-tmf-gray-3': disabled
      }"
      [disabled]="disabled"
      [value]="value"
    >
    </textarea>
  `,
  styleUrls: ['./textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('textarea') textarea!: ElementRef<HTMLTextAreaElement>;

  @Input() label = '';
  @Input() info = '';
  @Input() isRequired: boolean = false;

  value: string = '';
  disabled: boolean = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
    this.adjustTextarea();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterViewInit(): void {
    this.adjustTextarea();
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
    this.adjustTextarea();
  }

  private adjustTextarea(): void {
    if (this.textarea) {
      const textarea = this.textarea.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
}
