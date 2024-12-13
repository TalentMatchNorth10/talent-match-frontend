import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  InputComponent,
  SelectComponent,
  OptionComponent,
  SwitchComponent,
  InputType
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
import { filter, switchMap } from 'rxjs';
import { DialogService } from 'src/app/shared/services/dialog.service';

export enum ViewMode {
  List = 'list',
  Edit = 'edit',
  Create = 'create'
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
  selector: 'app-teacher-videos-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VideoCardComponent,
    InputComponent,
    SelectComponent,
    OptionComponent,
    SwitchComponent,
    TextareaComponent
  ],
  templateUrl: './teacher-videos-page.component.html',
  styleUrl: './teacher-videos-page.component.scss'
})
export default class TeacherVideosPageComponent implements OnInit {
  private teacherVideoService = inject(TeacherVideoService);
  private commonService = inject(CommonService);
  private uploadService = inject(UploadService);
  private fb = inject(FormBuilder);
  private dialogService = inject(DialogService);

  mode = signal(ViewMode.List);
  videos: VideoCardData[] = [];
  categoryOptions: TagsResponseModelDataInner[] = [];
  uploadForm = this.fb.group({
    [UploadFormKey.NAME]: this.fb.control<string | null>(null, [
      Validators.required
    ]),
    [UploadFormKey.CATEGORY]: this.fb.control<string | null>(null, [
      Validators.required
    ]),
    [UploadFormKey.INTRO]: this.fb.control<string | null>(null, [
      Validators.required
    ]),
    [UploadFormKey.VIDEO_TYPE]: this.fb.control<boolean | null>(false, [
      Validators.required
    ]),
    [UploadFormKey.URL]: this.fb.control<string | null>(null)
  });
  currentFile: File | null = null;

  get videoType() {
    return this.uploadForm.controls[UploadFormKey.VIDEO_TYPE];
  }

  readonly ViewMode = ViewMode;
  readonly UploadFormKey = UploadFormKey;
  readonly InputType = InputType;

  ngOnInit() {
    this.getVideoList();
    this.commonService
      .apiCommonTagGet()
      .subscribe((tags) => (this.categoryOptions = tags.data));
  }

  getVideoList() {
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
    });
  }

  changeView(mode: ViewMode, video?: VideoCardData) {
    this.mode.set(mode);
    if (mode === ViewMode.List) {
      this.uploadForm.reset();
      this.currentFile = null;
    } else if (mode === ViewMode.Edit) {
      this.uploadForm.patchValue({
        [UploadFormKey.NAME]: video?.name || '',
        [UploadFormKey.CATEGORY]: video?.category || '',
        [UploadFormKey.INTRO]: video?.intro || '',
        [UploadFormKey.VIDEO_TYPE]: video?.video_type === 'youtube' || false,
        [UploadFormKey.URL]: video?.video_type === 'youtube' ? video?.url : ''
      });
    }
  }

  deleteVideo(video: VideoCardData) {
    this.dialogService
      .openConfirmDialog({
        title: '是否刪除此影片?',
        content: '刪除後無法復原',
        confirmBtnText: '確定',
        btnType: 'danger'
      })
      .pipe(
        filter((result) => result),
        switchMap(() =>
          this.teacherVideoService.apiTeacherVideoVideoIdDelete({
            videoId: video.video_id
          })
        )
      )
      .subscribe(() => {
        this.getVideoList();
      });
  }

  save() {
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
            video_type: video_type ? 'youtube' : 'storage'
          }
        })
        .subscribe(() => {
          this.getVideoList();
          this.uploadForm.reset();
          this.currentFile = null;
          this.changeView(ViewMode.List);
        });
    };

    const video_type = this.uploadForm.controls[UploadFormKey.VIDEO_TYPE].value;
    if (video_type === false) {
      if (!this.currentFile) return;
      this.uploadService
        .apiUploadFilePost({
          fileType: 'video',
          path: 'user',
          file: this.currentFile
        })
        .subscribe(({ fileUrl }) => {
          this.uploadForm.controls[UploadFormKey.URL].setValue(fileUrl || '');
          uploadVideo();
        });
    } else {
      uploadVideo();
    }
  }

  hanldeVideoChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.currentFile = file;
  }
}
