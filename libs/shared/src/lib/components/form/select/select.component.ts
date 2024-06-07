import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  OnInit,
  OnDestroy,
  forwardRef,
  QueryList,
  ContentChildren,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  CdkOverlayOrigin,
  OverlayModule,
  ViewportRuler
} from '@angular/cdk/overlay';
import { Subject, merge, startWith, takeUntil } from 'rxjs';
import { SelectService } from './option/select.service';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'tmf-select',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.inline-block]': 'true',
    '[class.w-full]': 'true'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    SelectService
  ]
})
export class SelectComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  private viewportRuler = inject(ViewportRuler);
  private cdr = inject(ChangeDetectorRef);
  private selectService = inject(SelectService);

  @ContentChildren(OptionComponent, { descendants: true })
  optionComponents!: QueryList<OptionComponent>;

  @ViewChild(CdkOverlayOrigin, { static: true, read: ElementRef })
  originElement!: ElementRef;

  @Input() placeholder = '請選擇';
  @Input() label = '';
  @Input() invalid = false;
  @Input() isRequired: boolean = false;
  @Input() icon: string = '';
  @Output() selectChange = new EventEmitter<any>();
  @Output() tmfBlur = new EventEmitter<void>();

  listOfContainerItemMap: Record<string, string | number | null> = {};

  originRect: any;

  private _displayOption = '';
  private _selectedOption?: OptionComponent;
  private _panelOpen = false;
  private _disabled = false;
  private readonly destory$ = new Subject<void>();

  value: any;

  get panelOpen(): boolean {
    return this._panelOpen;
  }

  get selectedOption(): OptionComponent | undefined {
    return this._selectedOption;
  }

  get displayOption(): any {
    return this._displayOption;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  constructor() {
    this.selectService.init(this);
  }

  ngOnInit(): void {
    this.viewportRuler
      .change()
      .pipe(takeUntil(this.destory$))
      .subscribe(() => {
        if (this.panelOpen) {
          this.originRect =
            this.originElement.nativeElement.getBoundingClientRect();
          this.cdr.detectChanges();
        }
      });
  }

  ngAfterContentInit(): void {
    merge(this.optionComponents.changes)
      .pipe(startWith(true), takeUntil(this.destory$))
      .subscribe(() => {
        this.optionComponents.toArray().forEach((el) => {
          this.listOfContainerItemMap[`${el.value}`] = `${el.label}`;
        });

        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }

  private updateRect() {
    this.originRect = this.originElement.nativeElement.getBoundingClientRect();
  }

  onSelect(option: OptionComponent) {
    this._selectedOption = option;
    this.value = option.value;
    this.onChange(option.value);
    this.selectChange.emit(option.value);
    this.closePanel();
    this.cdr.markForCheck();
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  open() {
    if (!this.disabled) {
      this.updateRect();
      this._panelOpen = !this._panelOpen;
    }
  }

  closePanel() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this.tmfBlur.emit();
      this.cdr.markForCheck();
    }
  }

  writeValue(modelValue: any): void {
    if (this.value !== modelValue) {
      this.value = modelValue;
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this._disabled = disabled;
    if (disabled) {
      this._panelOpen = false;
    }
    this.cdr.markForCheck();
  }
}