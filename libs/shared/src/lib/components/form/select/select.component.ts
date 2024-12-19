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
  inject,
  Injector,
  Self,
  Optional
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl
} from '@angular/forms';
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
  private inj = inject(Injector);
  private viewportRuler = inject(ViewportRuler);
  private cdr = inject(ChangeDetectorRef);
  private selectService = inject(SelectService);

  @ContentChildren(OptionComponent, { descendants: true })
  optionComponents!: QueryList<OptionComponent>;

  @ViewChild(CdkOverlayOrigin, { static: true, read: ElementRef })
  originElement!: ElementRef;

  @Input() placeholder = '請選擇';
  @Input() label = '';
  @Input() info = '';
  @Input() invalid = false;
  @Input() isRequired: boolean = false;
  @Input() icon: string = '';
  @Input() multiSelect: boolean = false;
  @Input() maxSelected: number | null = null;
  @Output() selectChange = new EventEmitter<any>();
  @Output() tmfBlur = new EventEmitter<void>();

  listOfContainerItemMap: Record<string, string | number | boolean | null> = {};

  originRect: any;

  private _selectedOptions: OptionComponent[] = [];
  private _panelOpen = false;
  private _disabled = false;
  private readonly destory$ = new Subject<void>();

  ngControl!: NgControl;
  value: any;

  get panelOpen(): boolean {
    return this._panelOpen;
  }

  get selectedOptions(): OptionComponent[] {
    return this._selectedOptions;
  }

  get displayOptions(): string {
    if (this.multiSelect) {
      return this._selectedOptions
        .map((option) => this.listOfContainerItemMap[option.value] as string)
        .join(', ');
    }
    return this.listOfContainerItemMap[this.value] as string;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  constructor() {
    this.selectService.init(this);
  }

  ngOnInit(): void {
    this.ngControl = this.inj.get(NgControl);
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

        setTimeout(() => {
          this.writeValue(this.ngControl?.control?.value);
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
    if (this.multiSelect) {
      const index = this._selectedOptions.indexOf(option);

      if (index === -1) {
        if (
          this.maxSelected &&
          this._selectedOptions.length >= this.maxSelected
        ) {
          return;
        }
        this._selectedOptions.push(option);
      } else {
        this._selectedOptions.splice(index, 1);
      }
      this.value = this._selectedOptions.map((opt) => opt.value);
    } else {
      this._selectedOptions = [option];
      this.value = option.value;
      this.closePanel();
    }
    this.onChange(this.value);
    this.selectChange.emit(this.value);
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
    if (this.optionComponents) {
      this.value = modelValue;
      if (this.multiSelect) {
        this._selectedOptions = this.optionComponents.filter((option) =>
          modelValue.includes(option.value)
        );
      } else {
        if (this.value !== modelValue) return;
        this._selectedOptions = this.optionComponents.filter(
          (option) => option.value === modelValue
        );
      }
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
