import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartTableForm, CartTableFormKey } from './cart-table.model';
import { CheckboxComponent } from '@tmf/libs-shared/components/form/checkbox/checkbox.component';
import { distinctUntilChanged } from 'rxjs';
import { GetCartItemsResponseModelDataInner } from 'libs/openapi/src';

@Component({
  selector: 'app-cart-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CheckboxComponent],
  template: `
    <!-- pc -->
    <div [formGroup]="form" class="cart-table hidden lg:block">
      <div class="cart-table-header-row">
        <div class="cart-table-header-column w-[52px] shrink-0 text-center">
          <div class="flex h-full items-center">
            <tmf-checkbox
              (ngModelChange)="toggleSelectAll($event)"
              [formControlName]="CartTableFormKey.SELECTALL"
            ></tmf-checkbox>
          </div>
        </div>
        <div class="cart-table-header-column w-[60%] text-left">課程</div>
        <div class="cart-table-header-column w-[15%] text-center">售價</div>
        <div class="cart-table-header-column w-[15%] text-center">操作</div>
      </div>
      @if (dataSource.length && rows.controls.length) {
        @for (rowData of dataSource; track rowData; let index = $index) {
          <div
            [ngClass]="{
              '!bg-tmf-orange-4': rows.controls[index].value
            }"
            class="cart-table-body-row"
          >
            <div class="cart-table-body-column w-[52px] shrink-0 text-center">
              <div class="flex h-full items-center">
                <tmf-checkbox
                  [formControl]="rows.controls[index]"
                ></tmf-checkbox>
              </div>
            </div>
            <div class="cart-table-body-column w-[60%] text-left">
              <div class="flex items-center gap-x-3">
                <div
                  class="h-[112px] w-[200px] shrink-0 overflow-hidden rounded-lg"
                >
                  @if (rowData.image) {
                    <img
                      [src]="rowData.image"
                      class="h-full w-full object-cover"
                      alt=""
                    />
                  }
                </div>
                <div class="flex flex-col gap-y-1">
                  <div class="flex gap-2">
                    <div
                      class="rounded bg-tmf-gray-5 px-2 py-1 text-[14px] leading-5"
                    >
                      {{ rowData.main_category }}
                    </div>
                    <div
                      class="rounded bg-tmf-gray-5 px-2 py-1 text-[14px] leading-5"
                    >
                      {{ rowData.sub_category }}
                    </div>
                  </div>
                  <p class="text-[18px] font-bold leading-7">
                    {{ rowData.name }}
                  </p>
                  <p class="text-[14px] leading-5 text-tmf-gray-3">
                    {{ rowData.quantity }}堂課程
                  </p>
                </div>
              </div>
            </div>
            <div class="cart-table-body-column w-[15%] text-center">
              <div class="flex h-full items-center justify-center">
                <p class="text-[18px] font-medium leading-7 text-tmf-gray-2">
                  NT$ {{ rowData.price.toLocaleString() }}
                </p>
              </div>
            </div>
            <div class="cart-table-body-column w-[15%] text-center">
              <div class="flex h-full items-center justify-center gap-3">
                <button
                  (click)="addToRemoveStage(rowData)"
                  class="flex items-center justify-center text-tmf-gray-3 duration-100 active:origin-center active:scale-90"
                >
                  <span class="material-symbols-outlined">delete</span>
                </button>
                <button
                  class="flex items-center justify-center text-tmf-gray-3 duration-100 active:origin-center active:scale-90"
                >
                  <span class="material-symbols-outlined">heart_plus</span>
                </button>
              </div>
            </div>

            @if (isRemoveStageItem(rowData)) {
              <ng-container
                *ngTemplateOutlet="removeMask; context: { rowData: rowData }"
              ></ng-container>
            }
          </div>
        }
      } @else {
        <ng-container [ngTemplateOutlet]="empty"></ng-container>
      }
    </div>

    <!-- mobile、pad -->
    <div [formGroup]="form" class="cart-table block lg:hidden">
      <div class="cart-table-header-row">
        <div class="cart-table-header-column shrink-0">
          <div class="flex h-full items-center gap-2">
            <tmf-checkbox
              (ngModelChange)="toggleSelectAll($event)"
              [formControlName]="CartTableFormKey.SELECTALL"
            ></tmf-checkbox>
            <p class="text-[14px] leading-5 text-white">全選</p>
          </div>
        </div>
      </div>
      @if (dataSource.length && rows.controls.length) {
        @for (rowData of dataSource; track rowData; let index = $index) {
          <div class="cart-table-body-row">
            <div class="cart-table-body-column flex w-full items-center gap-3">
              <div class="flex h-full shrink-0 items-center">
                <tmf-checkbox
                  [formControl]="rows.controls[index]"
                ></tmf-checkbox>
              </div>
              <div class="flex flex-grow flex-col items-start gap-2">
                <div class="flex gap-2 text-[12px] leading-4">
                  <div class="rounded bg-tmf-gray-5 px-2 py-1">
                    {{ rowData.main_category }}
                  </div>
                  <div class="rounded bg-tmf-gray-5 px-2 py-1">
                    {{ rowData.sub_category }}
                  </div>
                </div>
                <div class="flex gap-3">
                  <div
                    class="h-[68px] w-[120px] overflow-hidden rounded-lg md:h-[102px] md:w-[180px]"
                  >
                    <img
                      class="h-full w-full object-cover"
                      [src]="rowData.image"
                      alt="main image"
                    />
                  </div>
                  <div class="flex flex-col items-start gap-1">
                    <h3
                      class="md:leading-87 text-[16px] font-bold leading-6 text-tmf-gray-2 md:text-[20px]"
                    >
                      {{ rowData.name }}
                    </h3>
                    <p
                      class="text-[14px] leading-5 text-tmf-gray-3 md:text-[16px] md:leading-6"
                    >
                      {{ rowData.quantity }}堂課程
                    </p>
                  </div>
                </div>
                <div class="flex w-full justify-between">
                  <p class="text-[18px] font-medium leading-7 text-tmf-gray-2">
                    NT$ {{ rowData.price }}
                  </p>
                  <div class="flex h-full items-center justify-center gap-3">
                    <button
                      (click)="addToRemoveStage(rowData)"
                      class="flex items-center justify-center text-tmf-gray-3 duration-100 active:origin-center active:scale-90"
                    >
                      <span class="material-symbols-outlined">delete</span>
                    </button>
                    <button
                      class="flex items-center justify-center text-tmf-gray-3 duration-100 active:origin-center active:scale-90"
                    >
                      <span class="material-symbols-outlined">heart_plus</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            @if (isRemoveStageItem(rowData)) {
              <ng-container
                *ngTemplateOutlet="removeMask; context: { rowData: rowData }"
              ></ng-container>
            }
          </div>
        }
      } @else {
        <ng-container [ngTemplateOutlet]="empty"></ng-container>
      }
    </div>

    <ng-template #empty>
      <div class="flex h-[500px] flex-col items-center justify-center">
        <div class="mr-5 h-[120px] w-[120px]">
          <img
            class="h-full w-full"
            src="./assets/images/cart.png"
            alt="cart"
          />
        </div>
        <p
          class="flex flex-col items-center text-[18px] font-bold leading-7 text-tmf-gray-2"
        >
          <span>購物車是空的 :(</span>
          <span>馬上去瞧瞧其他好課程！</span>
        </p>
      </div>
    </ng-template>

    <ng-template #removeMask let-rowData="rowData">
      <div
        class="absolute left-0 top-0 z-10 h-full w-full bg-white/50 px-6 py-7 backdrop-blur"
      >
        <div class="flex h-full flex-col items-end justify-center gap-3">
          <button
            (click)="remove(rowData)"
            class="flex rounded-lg border border-tmf-gray-3 bg-white px-4 py-2 text-[16px] leading-6 text-tmf-gray-3"
          >
            移除課程
          </button>
          <button
            (click)="cancel(rowData)"
            class="flex rounded-lg bg-tmf-orange-1 px-4 py-2 text-[16px] leading-6 text-white"
          >
            保留課程
          </button>
        </div>
      </div>
    </ng-template>
  `,
  styleUrl: './cart-table.component.scss'
})
export class CartTableComponent implements OnChanges, OnInit {
  private fb = inject(FormBuilder);

  selectedCheckboxs: any[] = [];
  removeStage: string[] = [];

  @Input() dataSource: GetCartItemsResponseModelDataInner[] = [];
  @Output() selectChange = new EventEmitter<any>();
  @Output() removeItem = new EventEmitter<string>();

  control = new FormControl(null);

  form = this.fb.group<CartTableForm>({
    selectAll: this.fb.control(false),
    rows: this.fb.array<FormControl<boolean | null>>([])
  });

  get rows() {
    return this.form.controls[CartTableFormKey.ROWS];
  }

  readonly CartTableFormKey = CartTableFormKey;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.rows.clear();
      this.removeStage = [];
      this.dataSource.forEach(() => {
        this.rows.push(this.fb.control(false));
      });

      if (!this.dataSource || this.dataSource.length === 0) {
        this.form.controls[CartTableFormKey.SELECTALL].disable();
      } else {
        this.form.controls[CartTableFormKey.SELECTALL].enable();
      }
    }
  }

  ngOnInit(): void {
    this.rows.valueChanges
      .pipe(
        distinctUntilChanged(
          (prev, curr) =>
            prev.length === curr.length &&
            prev.every((value, index) => value === curr[index])
        )
      )
      .subscribe((value) => {
        this.selectedCheckboxs = [];
        value.forEach((val, index) => {
          if (val) {
            this.selectedCheckboxs.push(this.dataSource[index]);
          }
        });
        this.selectChange.emit(this.selectedCheckboxs);
      });
  }

  toggleSelectAll(value: boolean) {
    this.rows.controls.forEach((control) => control.setValue(value));
  }

  addToRemoveStage(rowData: GetCartItemsResponseModelDataInner) {
    this.removeStage.push(rowData.purchase_item_id);
  }

  remove(rowData: GetCartItemsResponseModelDataInner) {
    this.removeItem.emit(rowData.purchase_item_id);
    this.removeStage = this.removeStage.filter(
      (id) => id !== rowData.purchase_item_id
    );
  }

  cancel(rowData: GetCartItemsResponseModelDataInner) {
    this.removeStage = this.removeStage.filter(
      (id) => id !== rowData.purchase_item_id
    );
  }

  isRemoveStageItem(rowData: GetCartItemsResponseModelDataInner) {
    return this.removeStage.includes(rowData.purchase_item_id);
  }
}
