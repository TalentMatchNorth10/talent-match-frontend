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
        <div class="cart-table-header-column text-center w-[52px] shrink-0">
          <div class="flex items-center h-full">
            <tmf-checkbox
              (ngModelChange)="toggleSelectAll($event)"
              [formControlName]="CartTableFormKey.SELECTALL"
            ></tmf-checkbox>
          </div>
        </div>
        <div class="cart-table-header-column text-left w-[60%]">課程</div>
        <div class="cart-table-header-column text-center w-[15%]">售價</div>
        <div class="cart-table-header-column text-center w-[15%]">操作</div>
      </div>
      @if (dataSource.length && rows.controls.length) {
        @for (rowData of dataSource; track rowData; let index = $index) {
          <div
            [ngClass]="{
              '!bg-tmf-orange-4': rows.controls[index].value
            }"
            class="cart-table-body-row"
          >
            <div class="cart-table-body-column text-center w-[52px] shrink-0">
              <div class="flex items-center h-full">
                <tmf-checkbox
                  [formControl]="rows.controls[index]"
                ></tmf-checkbox>
              </div>
            </div>
            <div class="cart-table-body-column text-left w-[60%]">
              <div class="flex gap-x-3 items-center">
                <div
                  class="w-[200px] h-[112px] shrink-0 rounded-lg overflow-hidden"
                >
                  @if (rowData.image) {
                    <img
                      [src]="rowData.image"
                      class="object-cover w-full h-full"
                      alt=""
                    />
                  }
                </div>
                <div class="flex flex-col gap-y-1">
                  <div class="flex gap-2">
                    <div
                      class="px-2 py-1 bg-tmf-gray-5 rounded text-[14px] leading-5"
                    >
                      {{ rowData.main_category }}
                    </div>
                    <div
                      class="px-2 py-1 bg-tmf-gray-5 rounded text-[14px] leading-5"
                    >
                      {{ rowData.sub_category }}
                    </div>
                  </div>
                  <p class="text-[18px] leading-7 font-bold">
                    {{ rowData.name }}
                  </p>
                  <p class="text-[14px] leading-5 text-tmf-gray-3">
                    {{ rowData.quantity }}堂課程
                  </p>
                </div>
              </div>
            </div>
            <div class="cart-table-body-column text-center w-[15%]">
              <div class="flex items-center justify-center h-full">
                <p class="text-[18px] leading-7 text-tmf-gray-2 font-medium">
                  NT$ {{ rowData.price.toLocaleString() }}
                </p>
              </div>
            </div>
            <div class="cart-table-body-column text-center w-[15%]">
              <div class="flex justify-center items-center gap-3 h-full">
                <button
                  (click)="addToRemoveStage(rowData)"
                  class="text-tmf-gray-3 flex justify-center items-center active:scale-90 active:origin-center duration-100"
                >
                  <span class="material-symbols-outlined">delete</span>
                </button>
                <button
                  class="text-tmf-gray-3 flex justify-center items-center active:scale-90 active:origin-center duration-100"
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
          <div class="flex items-center gap-2 h-full">
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
            <div class="cart-table-body-column w-full flex items-center gap-3">
              <div class="flex items-center h-full shrink-0">
                <tmf-checkbox
                  [formControl]="rows.controls[index]"
                ></tmf-checkbox>
              </div>
              <div class="flex flex-col flex-grow gap-2 items-start">
                <div class="flex gap-2 text-[12px] leading-4">
                  <div class="px-2 py-1 bg-tmf-gray-5 rounded">
                    {{ rowData.main_category }}
                  </div>
                  <div class="px-2 py-1 bg-tmf-gray-5 rounded">
                    {{ rowData.sub_category }}
                  </div>
                </div>
                <div class="flex gap-3">
                  <div
                    class="w-[120px] h-[68px] md:w-[180px] md:h-[102px] rounded-lg overflow-hidden"
                  >
                    <img
                      class="w-full h-full object-cover"
                      [src]="rowData.image"
                      alt="main image"
                    />
                  </div>
                  <div class="flex flex-col gap-1 items-start">
                    <h3
                      class="text-[16px] leading-6 md:text-[20px] md:leading-87 font-bold text-tmf-gray-2"
                    >
                      {{ rowData.name }}
                    </h3>
                    <p
                      class="text-[14px] leading-5 md:text-[16px] md:leading-6 text-tmf-gray-3"
                    >
                      {{ rowData.quantity }}堂課程
                    </p>
                  </div>
                </div>
                <div class="flex justify-between w-full">
                  <p class="text-[18px] leading-7 text-tmf-gray-2 font-medium">
                    NT$ {{ rowData.price }}
                  </p>
                  <div class="flex justify-center items-center gap-3 h-full">
                    <button
                      (click)="addToRemoveStage(rowData)"
                      class="text-tmf-gray-3 flex justify-center items-center active:scale-90 active:origin-center duration-100"
                    >
                      <span class="material-symbols-outlined">delete</span>
                    </button>
                    <button
                      class="text-tmf-gray-3 flex justify-center items-center active:scale-90 active:origin-center duration-100"
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
      <div class="flex flex-col items-center justify-center h-[500px]">
        <div class="w-[120px] h-[120px] mr-5">
          <img
            class="w-full h-full"
            src="./assets/images/cart.png"
            alt="cart"
          />
        </div>
        <p
          class="text-[18px] leading-7 text-tmf-gray-2 font-bold flex flex-col items-center"
        >
          <span>購物車是空的 :(</span>
          <span>馬上去瞧瞧其他好課程！</span>
        </p>
      </div>
    </ng-template>

    <ng-template #removeMask let-rowData="rowData">
      <div
        class="w-full h-full absolute z-10 px-6 py-7 left-0 top-0 backdrop-blur bg-white/50"
      >
        <div class="flex flex-col justify-center items-end gap-3 h-full">
          <button
            (click)="remove(rowData)"
            class="border border-tmf-gray-3 bg-white rounded-lg text-tmf-gray-3 flex text-[16px] leading-6 px-4 py-2"
          >
            移除課程
          </button>
          <button
            (click)="cancel(rowData)"
            class="rounded-lg bg-tmf-orange-1 text-white flex text-[16px] leading-6 px-4 py-2"
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
