import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  CheckboxComponent,
  InputComponent,
  InputType,
  OptionComponent,
  SelectComponent,
  SwitchComponent
} from '@tmf/libs-shared/components';
import { TextareaComponent } from '@tmf/libs-shared/components/form/textarea/textarea.component';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import {
  CommonService,
  TagsResponseModelDataInner,
  TeacherVideoService,
  UploadService
} from 'libs/openapi/src';

enum VideoSelectMode {
  Select = 'select',
  Upload = 'upload'
}

enum UploadFormKey {
  NAME = 'name',
  CATEGORY = 'category',
  INTRO = 'intro',
  VIDEO_TYPE = 'video_type',
  URL = 'url',
  TEACHER_ID = 'teacher_id'
}

@Component({
  selector: 'app-video-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VideoCardComponent,
    CheckboxComponent,
    InputComponent,
    SelectComponent,
    OptionComponent,
    SwitchComponent,
    TextareaComponent
  ],
  template: `
    <div class="flex h-full flex-col justify-between gap-y-5 bg-white p-5">
      <div class="flex justify-between">
        <h2 class="text-xl font-bold">管理短影片</h2>
        <button
          (click)="toggleMode()"
          class="rounded-md bg-tmf-orange-1 px-2 py-1 text-white"
        >
          {{ mode === VideoSelectMode.Select ? '上傳影片' : '管理影片' }}
        </button>
      </div>
      @if (mode === VideoSelectMode.Select) {
        @if (chks) {
          <div
            class="flex h-[400px] flex-col gap-3 overflow-auto rounded-xl border bg-tmf-orange-4 p-5"
          >
            @for (video of videos; track video; let idx = $index) {
              <div class="flex items-center gap-3">
                <tmf-checkbox [formControl]="chks.at(idx)"></tmf-checkbox>
                <div class="flex gap-5">
                  <tmf-video-card [data]="video"></tmf-video-card>
                  <div class="flex flex-col gap-3">
                    <p>
                      <span class="text-gray-500">名稱：</span>
                      <span>{{ video.name }}</span>
                    </p>
                    <p>
                      <span class="text-gray-500">類別：</span>
                      <span>{{ video.category }}</span>
                    </p>
                    <p>
                      <span class="text-gray-500">簡介：</span>
                      <span>{{ video.intro }}</span>
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      } @else {
        <div
          [formGroup]="uploadForm"
          class="flex h-[400px] flex-col overflow-auto"
        >
          <tmf-input
            label="課程名稱"
            placeholder="請輸入課程名稱"
            [isRequired]="true"
            [formControlName]="UploadFormKey.NAME"
            [inputType]="InputType.Outline"
          ></tmf-input>
          <tmf-select
            class="mb-6"
            label="影片類別"
            [isRequired]="true"
            [formControlName]="UploadFormKey.CATEGORY"
          >
            @for (option of categoryOptions; track option) {
              <tmf-option
                [value]="option.main_category"
                [label]="option.main_category || ''"
              ></tmf-option>
            }
          </tmf-select>
          <tmf-textarea
            label="影片簡介"
            placeholder="請輸入影片簡介"
            [isRequired]="true"
            [formControlName]="UploadFormKey.INTRO"
          ></tmf-textarea>
          <div class="mb-6 flex flex-col">
            <p class="mb-1">
              <span class="select-label">影片為外部連結</span>
              <span class="text-red-500">*</span>
            </p>
            <tmf-switch
              [formControlName]="UploadFormKey.VIDEO_TYPE"
            ></tmf-switch>
          </div>
          @if (videoType.value) {
            <tmf-input
              label="影片連結"
              placeholder="請輸入影片連結"
              [isRequired]="true"
              [formControlName]="UploadFormKey.URL"
              [inputType]="InputType.Outline"
            ></tmf-input>
          } @else {
            <p class="mb-1">
              <span class="select-label">影片檔案</span>
              <span class="text-red-500">*</span>
            </p>
            <div class="flex items-center gap-1">
              <button
                (click)="file.click()"
                class="w-[100px] rounded-md bg-tmf-orange-1 py-1 text-white"
              >
                上傳檔案
              </button>
              <p>{{ currentFile?.name }}</p>
            </div>
            <input
              #file
              type="file"
              hidden
              accept="video/*"
              (change)="hanldeVideoChange($event)"
            />
          }
        </div>
      }
      <div class="flex justify-end gap-5">
        <button (click)="cancel()" class="w-[100px] rounded-md border py-1">
          取消
        </button>
        <button
          (click)="canSubmit ? submit() : null"
          [ngClass]="{
            'cursor-not-allowed !bg-tmf-gray-5': !canSubmit
          }"
          class="w-[100px] rounded-md bg-tmf-orange-1 py-1 text-white"
        >
          確定
        </button>
      </div>
    </div>
  `,
  styleUrl: './video-select.component.css'
})
export class VideoSelectComponent implements OnInit {
  private teacherVideoService = inject(TeacherVideoService);
  private commonService = inject(CommonService);
  private uploadService = inject(UploadService);
  private data = inject(DIALOG_DATA);
  private dialogRef = inject(DialogRef);
  private fb = inject(FormBuilder);

  mode: VideoSelectMode = VideoSelectMode.Select;
  chks!: FormArray<FormControl>;
  videos: VideoCardData[] = [];
  categoryOptions: TagsResponseModelDataInner[] = [];
  uploadForm = this.fb.group({
    [UploadFormKey.NAME]: this.fb.control(null, [Validators.required]),
    [UploadFormKey.CATEGORY]: this.fb.control(null, [Validators.required]),
    [UploadFormKey.INTRO]: this.fb.control(null, [Validators.required]),
    [UploadFormKey.VIDEO_TYPE]: this.fb.control(false, [Validators.required]),
    [UploadFormKey.URL]: this.fb.control(null)
  });
  currentFile: File | null = null;

  get videoType() {
    return this.uploadForm.controls[UploadFormKey.VIDEO_TYPE];
  }

  readonly VideoSelectMode = VideoSelectMode;
  readonly UploadFormKey = UploadFormKey;
  readonly InputType = InputType;

  get selectedVideoIds() {
    return this.data.videoIds;
  }

  get courseId() {
    return this.data.courseId;
  }

  get teacherId() {
    return this.data.teacherId;
  }

  get canSubmit() {
    if (this.mode === VideoSelectMode.Upload) {
      const video_type =
        this.uploadForm.controls[UploadFormKey.VIDEO_TYPE].value;
      return video_type
        ? !this.uploadForm.invalid
        : this.currentFile && !this.uploadForm.invalid;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.teacherVideoService.apiTeacherVideoGet().subscribe((videos) => {
      this.videos = videos.data.map((video) => ({
        video_id: video._id,
        name: video.name,
        category: video.category,
        intro: video.intro,
        video_type: video.video_type,
        url: video.url,
        teacher_id: video.teacher_id,
        ...(video.course_id ? { course_id: video.course_id } : {})
      }));

      if (this.videos && this.videos.length) {
        const arr = new FormArray<FormControl>([]);
        this.videos.forEach((item) => {
          const isExist = this.selectedVideoIds.some(
            (videoId: string) => videoId === item.video_id
          );
          arr.push(new FormControl(isExist));
        });
        this.chks = arr;
      }
    });

    this.commonService
      .apiCommonTagGet()
      .subscribe((tags) => (this.categoryOptions = tags.data));
  }

  submit() {
    if (this.mode === VideoSelectMode.Upload) {
      const uploadVideo = () => {
        const { name, category, intro, url, video_type } =
          this.uploadForm.getRawValue();
        this.teacherVideoService
          .apiTeacherVideoPost({
            addTeacherVideoRequestModel: {
              name: name!,
              category: category!,
              intro: intro!,
              url: url!,
              video_type: video_type ? 'youtube' : 'storage',
              course_id: this.courseId,
              teacher_id: this.teacherId
            }
          })
          .subscribe(() => this.dialogRef.close());
      };

      const video_type =
        this.uploadForm.controls[UploadFormKey.VIDEO_TYPE].value;
      if (video_type === false) {
        if (!this.currentFile) return;
        this.uploadService
          .apiUploadFilePost({
            fileType: 'video',
            path: 'user',
            file: this.currentFile
          })
          .subscribe(({ fileUrl }) => {
            this.uploadForm.controls[UploadFormKey.URL].setValue(fileUrl);
            uploadVideo();
          });
      } else {
        uploadVideo();
      }
    } else {
      const selectedVideos = this.videos.filter(
        (_, idx) => this.chks.at(idx).value
      );
      this.dialogRef.close(selectedVideos);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  toggleMode(mode?: VideoSelectMode) {
    this.mode =
      mode || this.mode === VideoSelectMode.Select
        ? VideoSelectMode.Upload
        : VideoSelectMode.Select;
  }

  hanldeVideoChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.currentFile = file;
  }
}
