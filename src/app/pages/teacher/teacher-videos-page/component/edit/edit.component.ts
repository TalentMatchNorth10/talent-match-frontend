import { TeacherCourseService } from './../../../../../../../libs/openapi/src/api/teacher-course.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import {
  CommonService,
  GetTeacherVideoListResponseModelDataInner,
  TeacherVideoService,
  UploadService
} from 'libs/openapi/src';
import { VideoCardComponent } from '../../../../../../../libs/shared/src/lib/components/video-card/video-card.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputComponent } from '../../../../../../../libs/shared/src/lib/components/form/input/input.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { InputType } from '@tmf/libs-shared/components';
import { SelectComponent } from '../../../../../../../libs/shared/src/lib/components/form/select/select.component';
import { OptionComponent } from '../../../../../../../libs/shared/src/lib/components/form/select/option/option.component';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { TeacherVideoForm } from '../../interface/teacher-video-form.interface';

@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  imports: [
    CommonModule,
    VideoCardComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectComponent,
    OptionComponent,
    RouterModule
  ]
})
export default class EditComponent {
  // inject
  protected teacherVideoService = inject(TeacherVideoService);
  protected commonService = inject(CommonService);
  protected teacherCourseService = inject(TeacherCourseService);
  public route = inject(ActivatedRoute);
  public router = inject(Router);
  protected uploadService = inject(UploadService);
  protected dialogService = inject(DialogService);
  protected fb = inject(FormBuilder);

  remoteData?: GetTeacherVideoListResponseModelDataInner;
  /**
   * 影片資料
   *
   * @type {VideoCardData}
   * @memberof EditComponent
   */
  videoCardData?: VideoCardData;
  readonly InputType = InputType;

  tagOptions: string[] = [];
  courseOptions: {
    label: string;
    value: string;
  }[] = [];

  /** 控制項實際是綁到這 */
  formGroup: FormGroup<TeacherVideoForm> = this.fb.group<TeacherVideoForm>({
    _id: this.fb.control(null),
    name: this.fb.control(null, [
      Validators.required,
      Validators.maxLength(30)
    ]),
    category: this.fb.control(null, Validators.required),
    intro: this.fb.control(null, [
      Validators.required,
      Validators.maxLength(30)
    ]),
    url: this.fb.control(null, [Validators.required]),
    video_type: this.fb.control(null),
    course_id: this.fb.control(null),
    teacher_id: this.fb.control(null)
  });

  get intro() {
    return this.formGroup.get('intro') as FormControl;
  }
  get category() {
    return this.formGroup.get('category') as FormControl;
  }
  get url() {
    return this.formGroup.get('url') as FormControl;
  }

  ngOnInit(): void {
    this.getTags();
    this.getCourse();
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherVideoService
      .apiTeacherVideoVideoIdGet({ videoId: id! })
      .subscribe({
        next: (res) => {
          if (res.status) {
            this.remoteData = res.data;
            this.formGroup.setValue(
              Object.assign({ course_id: null }, res.data)
            );
            this.videoCardData = this.transformToVideoCardData(res.data);
          } else {
            console.error(res);
          }
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  transformToVideoCardData(
    item: GetTeacherVideoListResponseModelDataInner
  ): VideoCardData {
    return Object.assign(item, {
      video_id: item._id,
      category: null,
      intro: null
    });
  }

  getTags() {
    this.commonService.apiCommonTagGet().subscribe((res) => {
      res.data.forEach((item) => this.tagOptions.push(item.main_category!));
    });
  }

  getCourse() {
    this.teacherCourseService.apiTeacherCourseCoursesGet().subscribe((res) => {
      this.courseOptions = res.data.map((item) => {
        return {
          label: item.name,
          value: item._id
        };
      });
    });
  }

  uploadVideo(event: any) {
    this.uploadService
      .apiUploadFilePost({
        fileType: 'video',
        path: 'course',
        file: event.target.files[0]
      })
      .subscribe((res) => {
        this.formGroup.controls.url.setValue(res.fileUrl);
        this.formGroup.controls.video_type.setValue(
          GetTeacherVideoListResponseModelDataInner.VideoTypeEnum.Storage
        );
        if (this.videoCardData) {
          this.videoCardData.url = res.fileUrl;
        } else {
          this.videoCardData = {
            video_id: '',
            name: '',
            category: '',
            intro: '',
            url: res.fileUrl,
            video_type:
              GetTeacherVideoListResponseModelDataInner.VideoTypeEnum.Storage,
            teacher_id: ''
          };
        }
      });
  }

  save() {
    if (this.formGroup.valid) {
      this.teacherVideoService
        .apiTeacherVideoVideoIdPost({
          videoId: this.videoCardData!.video_id,
          updateTeacherVideoRequestModel: Object.assign(
            this.remoteData!,
            this.formGroup.value
          )
        })
        .subscribe((res) => {
          if (res.status) {
            this.dialogService.openAlertDialog({
              title: '儲存成功',
              content: res.data.message
            });
            this.router.navigate(['../../'], { relativeTo: this.route });
          }
        });
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
