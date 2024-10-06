import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TmfAlertConfig } from '../../dialogs/dialogs.obj';
import { AlertComponent } from '../../dialogs/alert/alert.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'tmf-image-upload',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploadComponent),
      multi: true
    }
  ],
  template: `
    <div class="flex items-center">
      <span class="input-label">{{ label }}</span>
      @if (sizeLimitWidth && sizeLimitHeight) {
        <span class="text-sm text-gray-500"
          >(尺寸限制 {{ sizeLimitWidth }}*{{ sizeLimitHeight }})</span
        >
      }
      @if (isRequired) {
        <span class="text-red-500">*</span>
      }
      <button
        (click)="fileUpload.click()"
        [ngClass]="{
          'cursor-not-allowed !bg-tmf-gray-3': disabled
        }"
        class="ml-1 rounded-md bg-tmf-orange-1 px-2 py-1 text-white"
      >
        上傳圖片
      </button>
    </div>

    <div class="flex flex-col space-y-2">
      <input
        #fileUpload
        type="file"
        (change)="onFileChange($event)"
        [disabled]="disabled"
        class="hidden"
      />

      <div
        class="mt-4 flex items-center justify-center bg-tmf-gray-5"
        [style.width.px]="previewWidth"
        [style.height.px]="previewHeight"
        [style.max-width]="'100%'"
        [style.max-height]="'100%'"
      >
        @if (imageUrl) {
          <img
            [src]="imageUrl"
            alt="已上傳的圖片預覽"
            class="h-full w-full object-cover"
          />
        } @else {
          <span class="text-tmf-gray-3">尚未上傳圖片</span>
        }
      </div>
    </div>
  `,
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent implements ControlValueAccessor {
  private dialog = inject(Dialog);

  @Input() isRequired: boolean = false;
  @Input() label = '';
  @Input() previewWidth = 400;
  @Input() previewHeight = 200;
  @Input() sizeLimitWidth!: number;
  @Input() sizeLimitHeight!: number;

  imageUrl: string | ArrayBuffer | null = null;
  disabled = false;

  private onChange: (value: any) => void = () => {};

  private onTouched: () => void = () => {};

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const handleFileRead = (file: File) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageUrl = reader.result;
            this.onChange(file);
          };
          reader.readAsDataURL(file);
        };

        if (this.sizeLimitWidth && this.sizeLimitHeight) {
          if (
            img.width === this.sizeLimitWidth &&
            img.height === this.sizeLimitHeight
          ) {
            handleFileRead(file);
          } else {
            this.openAlertDialog({
              title: '圖片尺寸錯誤',
              content: `圖片尺寸必須為 ${this.sizeLimitWidth}x${this.sizeLimitHeight}，請重新上傳。`
            }).closed.subscribe(() => {
              this.imageUrl = null;
              this.onChange(null);
            });
          }
        } else {
          handleFileRead(file);
        }
      };
    }
  }

  openAlertDialog(config?: TmfAlertConfig) {
    const data = config || new TmfAlertConfig();
    return this.dialog.open(AlertComponent, {
      data
    });
  }

  writeValue(value: any): void {
    if (value instanceof Blob || value instanceof File) {
      this.imageUrl = URL.createObjectURL(value);
    } else if (typeof value === 'string') {
      this.imageUrl = value;
    } else {
      this.imageUrl = null;
    }
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

  onTouchedHandler(): void {
    this.onTouched();
  }
}
