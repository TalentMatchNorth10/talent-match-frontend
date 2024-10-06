import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileService } from 'libs/openapi/src';
import { DownloadService } from 'src/app/shared/services/download.service';

export interface FileUploadItem {
  id: string | null;
  name: string;
  file?: File;
  fileId?: string | null;
}

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderComponent),
      multi: true
    }
  ],
  template: `
    <div class="mb-2 flex items-center">
      <span class="input-label">{{ label }}</span>
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
        上傳檔案
      </button>
    </div>

    <div class="flex flex-wrap gap-2">
      <input
        #fileUpload
        type="file"
        multiple
        (change)="onFileChange($event)"
        class="hidden"
      />

      <!-- 顯示上傳的檔案列表 -->
      <div
        *ngFor="let file of files; let i = index"
        [ngClass]="{
          'cursor-not-allowed bg-tmf-gray-5 text-tmf-gray-3': disabled,
          'cursor-pointer': (file.fileId || file.file) && !disabled
        }"
        (click)="!disabled ? downloadFile(file) : null"
        class="file-container"
      >
        <span class="file-text">{{ file.name }}</span>
        <button
          type="button"
          [disabled]="disabled"
          (click)="!disabled ? removeFile($event, i) : null"
          class="h-6 text-red-500 hover:text-red-700 focus:outline-none disabled:cursor-not-allowed disabled:text-tmf-gray-3"
        >
          <span class="material-icons">close</span>
        </button>
      </div>
    </div>
  `,
  styleUrl: './file-uploader.component.css'
})
export class FileUploaderComponent implements ControlValueAccessor {
  private downloadService = inject(DownloadService);
  private fileService = inject(FileService);

  @Input() isRequired: boolean = false;
  @Input() label = '';

  files: FileUploadItem[] = [];
  disabled = false;

  private onChange: (files: FileUploadItem[]) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.files = val.map((item: FileUploadItem) => ({
        id: item.id || null,
        name: item.name,
        file: item.file || null,
        fileId: item.fileId || null
      }));
    }
  }

  registerOnChange(fn: (files: FileUploadItem[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const newFiles = Array.from(fileList);
      newFiles.forEach((newFile) => {
        const fileExists = this.files.some(
          ({ file }) =>
            file &&
            file.name === newFile.name &&
            file.size === newFile.size &&
            file.lastModified === newFile.lastModified
        );
        if (!fileExists) {
          this.files.push({
            id: null,
            name: newFile.name,
            file: newFile,
            fileId: null
          });
        }
      });
      this.onChange(this.files);
      this.onTouched();
    }
  }

  removeFile(event: Event, index: number) {
    event.stopPropagation();
    this.files.splice(index, 1);
    this.onChange(this.files);
  }

  downloadFile(item: FileUploadItem) {
    if (item.fileId) {
      this.fileService
        .apiFileFileIdGet({
          fileId: item.fileId
        })
        .subscribe((file) => {
          this.downloadService.downloadFile(file, item.name);
        });
    } else if (item.file) {
      this.downloadService.downloadFile(item.file, item.name);
    }
  }
}
