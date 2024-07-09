import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
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
import { InputSize, InputType, SearchType } from './input.interface';
import {
  CdkOverlayOrigin,
  OverlayModule,
  ViewportRuler
} from '@angular/cdk/overlay';
import { OptionType } from '../share';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'tmf-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, OverlayModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
    @if (label) {
      <span class="input-label">{{ label }}</span>
      @if (isRequired) {
        <span class="text-red-500">*</span>
      }
    }
    <div
      class="relative"
      [ngClass]="{ 'pb-6': inputType !== InputType.Search }"
    >
      <div
        class="input-container"
        (keyup.enter)="search()"
        [ngClass]="{
          'cursor-not-allowed !bg-tmf-gray-5': disabled,
          'border-b placeholder:text-tmf-gray-3':
            inputType === InputType.Underline,
          'placeholder:text-tmf-gray-3': inputType === InputType.Outline,
          '!placeholder:text-tmf-gray-5 !border-tmf-gray-5':
            inputType === InputType.Search,
          'rounded-lg border':
            inputType === InputType.Outline ||
            inputType === InputType.Search ||
            inputType === InputType.SearchByType,
          '!pr-[38px]':
            inputType === InputType.Search ||
            inputType === InputType.SearchByType,
          'h-[44px] md:h-[48px] lg:h-[52px]': inputSize === InputSize.Large,
          'h-[36px] md:h-[38px] lg:h-[40px]': inputSize === InputSize.Default
        }"
      >
        @if (inputType === InputType.SearchByType && selectedOption) {
          <div
            id="searchType"
            cdkOverlayOrigin
            (click)="open()"
            #origin="cdkOverlayOrigin"
            class="mr-4 flex items-center"
          >
            @if (selectedOption.label) {
              <p
                class="mr-1 whitespace-nowrap"
                [ngClass]="{
                  'text-tmf-gray-3': disabled
                }"
              >
                {{ selectedOption.label }}
              </p>
            }
            <span
              class="material-symbols-outlined input-selectType-icon"
              [ngClass]="{
                'rotate-180 text-tmf-orange-1': panelOpen
              }"
            >
              keyboard_arrow_down
            </span>
          </div>
          <ng-template
            cdkConnectedOverlay
            cdkConnectedOverlayHasBackdrop
            cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
            [cdkConnectedOverlayOrigin]="origin"
            [cdkConnectedOverlayOpen]="panelOpen"
            (overlayOutsideClick)="closePanel()"
            [cdkConnectedOverlayMinWidth]="'100px'"
            [cdkConnectedOverlayOffsetY]="20"
            [cdkConnectedOverlayOffsetX]="-14"
          >
            <ul class="input-selectType-list">
              @for (option of options; track $index) {
                <li
                  class="input-selectType-item"
                  (click)="selectedOption = option; closePanel()"
                >
                  {{ option.label }}
                </li>
              }
            </ul>
          </ng-template>
        }

        <input
          class="input"
          [ngClass]="{
            'cursor-not-allowed bg-tmf-gray-5': disabled
          }"
          [formControl]="control"
          [type]="type"
          [placeholder]="placeholder"
        />

        @if (
          inputType === InputType.Search || inputType === InputType.SearchByType
        ) {
          <span
            class="material-symbols-outlined input-search-icon"
            [ngClass]="{
              '!cursor-not-allowed !text-tmf-gray-4': disabled
            }"
            (click)="search()"
          >
            search
          </span>
        }
      </div>
      @if (control.touched && ngControl.control?.errors && errorMessage) {
        <p class="error-message">
          {{ errorMessage }}
        </p>
      }
    </div>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent
  implements ControlValueAccessor, OnChanges, OnInit, AfterViewInit
{
  private inj = inject(Injector);
  private viewportRuler = inject(ViewportRuler);

  ngControl!: NgControl;
  control = new FormControl(null);

  selectedOption?: OptionType;
  panelOpen = false;
  originRect: any;
  private readonly destory$ = new Subject<void>();
  private _disabled = false;

  get disabled(): boolean {
    return this._disabled;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  @ViewChild(CdkOverlayOrigin, { static: false, read: ElementRef })
  originElement!: ElementRef;

  @Input() placeholder = '請輸入';
  @Input() inputType: InputType = InputType.Underline;
  @Input() inputSize: InputSize = InputSize.Default;
  @Input() type: 'text' | 'password' | 'search' = 'text';
  @Input() isRequired: boolean = false;
  @Input() label = '';
  @Input() errorMessage: string = '';
  @Input() options!: OptionType[];

  @Output() clickSearch = new EventEmitter<SearchType>();

  readonly InputType = InputType;
  readonly InputSize = InputSize;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && this.options && this.options.length > 0) {
      this.selectedOption = this.options[0];
    }
  }

  ngOnInit(): void {
    this.ngControl = this.inj.get<NgControl>(NgControl);
    this.viewportRuler
      .change()
      .pipe(takeUntil(this.destory$))
      .subscribe(() => {
        if (this.panelOpen) {
          this.updateRect();
        }
      });
  }

  ngAfterViewInit(): void {
    this.control.valueChanges.subscribe((val) => {
      this.noticeValueChange(val);
    });
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }

  search() {
    this.clickSearch.emit({
      type:
        this.inputType === InputType.SearchByType
          ? this.selectedOption?.value
          : null,
      value: this.control.value ?? ''
    });
  }

  open() {
    this.updateRect();
    this.panelOpen = !this.panelOpen;
  }

  closePanel() {
    if (this.panelOpen) {
      this.panelOpen = false;
    }
  }

  private updateRect() {
    this.originRect = this.originElement.nativeElement.getBoundingClientRect();
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

  setDisabledState(disabled: boolean): void {
    this._disabled = disabled;
    this.control[disabled ? 'disable' : 'enable']();
    if (disabled) {
      this.panelOpen = false;
    }
  }
}
