import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { OptionType } from '@tmf/libs-shared/components';
import { ChatUsersResponseModelDataInner } from 'libs/openapi/src';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent implements ControlValueAccessor, OnInit {
  private elementRef = inject(ElementRef);

  @Input() options: ChatUsersResponseModelDataInner[] = [];
  @Output() searchEvent = new EventEmitter<string>();
  @Output() selectEvent = new EventEmitter<ChatUsersResponseModelDataInner>();

  control = new FormControl();
  isOpen = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent): void {
    setTimeout(() => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((value) => {
        this.onChange(value);
      });
  }

  search(): void {
    this.searchEvent.emit(this.control.value);
  }

  selectOption(option: ChatUsersResponseModelDataInner): void {
    this.selectEvent.emit(option);
    this.isOpen = false;
  }

  writeValue(value: string): void {
    if (value !== this.control.value) {
      this.control.setValue(value);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
