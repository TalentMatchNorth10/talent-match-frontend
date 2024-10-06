import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  output
} from '@angular/core';
import { ViewMode } from '../../teacher-courses-page.component';
import {
  ChangeViewEvent,
  CourseStatus
} from '../course-table/course-table.model';
import {
  CommonService,
  FileService,
  GetTeacherCourseResponseModelData,
  TagsResponseModelDataInner,
  TeacherCourseService,
  UploadService
} from 'libs/openapi/src';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  InputComponent,
  InputType,
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import {
  CourseDetailForm,
  CourseDetailFormKey,
  FileDetails
} from './course-detail.model';
import { forkJoin, of, startWith, switchMap, tap } from 'rxjs';
import { TextareaComponent } from '@tmf/libs-shared/components/form/textarea/textarea.component';
import { QuillEditorComponent } from '@tmf/libs-shared/components/form/quill-editor/quill-editor.component';
import { VideoListComponent } from '../video-list/video-list.component';
import { DynamicInputListComponent } from '../dynamic-input-list/dynamic-input-list.component';
import { ImageUploadComponent } from '@tmf/libs-shared/components/form/image-upload/image-upload.component';
import {
  FileUploaderComponent,
  FileUploadItem
} from '../file-uploader/file-uploader.component';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    OptionComponent,
    TextareaComponent,
    QuillEditorComponent,
    VideoListComponent,
    DynamicInputListComponent,
    ImageUploadComponent,
    FileUploaderComponent
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
  private teacherCourseService = inject(TeacherCourseService);
  private commonService = inject(CommonService);
  private fileService = inject(FileService);
  private uploadService = inject(UploadService);
  private fb = inject(FormBuilder);
  private dialogService = inject(DialogService);

  mode = input<ViewMode>();
  courseId = input<string | null>();
  changeView = output<ChangeViewEvent>();

  courseData: GetTeacherCourseResponseModelData | null = null;

  cityOptions: OptionType[] = [];
  distOptions: OptionType[] = [];
  tagOptions: TagsResponseModelDataInner[] = [];

  formGroup: FormGroup<CourseDetailForm> = this.fb.group<CourseDetailForm>({
    name: this.fb.control(null),
    main_image: this.fb.control(null),
    content: this.fb.control(null),
    price_quantity: this.fb.control(null),
    main_category: this.fb.control(null),
    sub_category: this.fb.control(null),
    city_id: this.fb.control(null),
    dist_id: this.fb.control(null),
    survey_url: this.fb.control(null),
    status: this.fb.control(null),
    teacher_id: this.fb.control(null),
    purchase_message: this.fb.control(null),
    video_ids: this.fb.control([]),
    file_details: this.fb.control([]),
    file_url_details: this.fb.control([])
  });

  get content() {
    return this.formGroup.controls[CourseDetailFormKey.CONTENT];
  }

  get videoIds() {
    return this.courseData &&
      this.courseData.video_ids &&
      this.courseData.video_ids.length
      ? this.courseData.video_ids
      : [];
  }

  readonly ViewMode = ViewMode;
  readonly CourseStatus = CourseStatus;
  readonly CourseDetailFormKey = CourseDetailFormKey;
  readonly InputType = InputType;

  get subTagOptions() {
    const mainCategory = this.formGroup.value.main_category;
    return (
      this.tagOptions.find((options) => options.main_category === mainCategory)
        ?.sub_category || []
    );
  }

  constructor() {
    effect(() => {
      if (this.courseId()) {
        this.getCourse();
      }
    });

    effect(() => {
      if (this.mode() === ViewMode.View) {
        this.formGroup.disable();
      } else {
        this.formGroup.enable();
      }
    });
  }

  ngOnInit() {
    this.initOptions();
    this.handleValueChange();
  }

  handleValueChange() {
    this.formGroup.controls[CourseDetailFormKey.CITY_ID].valueChanges
      .pipe(
        startWith(null),
        switchMap((cityId) => {
          const distControl =
            this.formGroup.controls[CourseDetailFormKey.DIST_ID];
          if (!cityId) {
            distControl.reset();
            distControl.disable();
            return of(null); // 回傳一個空的 observable
          }

          if (this.mode() !== ViewMode.View) {
            distControl.enable();
          }
          return this.commonService.apiCommonOptionsDistPost({
            districtRequestModel: {
              is_oversea: false,
              city_id: cityId
            }
          });
        })
      )
      .subscribe((res) => {
        if (res) {
          this.distOptions = res.data;
        }
      });

    this.formGroup.controls[CourseDetailFormKey.MAIN_CATEGORY].valueChanges
      .pipe(startWith(null))
      .subscribe((mainCategory) => {
        const subCategoryControl =
          this.formGroup.controls[CourseDetailFormKey.SUB_CATEGORY];
        if (!mainCategory) {
          subCategoryControl.reset();
          subCategoryControl.disable();
          return;
        }

        if (this.mode() !== ViewMode.View) {
          subCategoryControl.enable();
        }
      });
  }

  handleSelectVideo(selectedVideos: string[]) {
    this.formGroup.controls[CourseDetailFormKey.VIDEO_IDS].setValue(
      selectedVideos
    );
  }

  initOptions() {
    this.commonService
      .apiCommonOptionsCityPost({
        cityRequestModel: {
          is_oversea: false
        }
      })
      .subscribe((res) => (this.cityOptions = res.data));

    this.commonService.apiCommonTagGet().subscribe((res) => {
      this.tagOptions = res.data;
    });
  }

  getCourse() {
    this.teacherCourseService
      .apiTeacherCourseCoursesCourseIdGet({
        courseId: this.courseId() as string
      })
      .subscribe((res) => {
        this.courseData = res.data;
        this.setFormValues(this.courseData);
      });
  }

  save() {
    const formValue = this.formGroup.getRawValue();
    const fileDetails = formValue[
      CourseDetailFormKey.FILE_DETAILS
    ] as FileUploadItem[];

    const sourceFileDetails = this.courseData?.file_details || [];
    const fileRemoves$ = sourceFileDetails
      .filter(
        (sourceItem) =>
          !fileDetails.some((fileItem) => fileItem.id === sourceItem.id)
      )
      .filter((item) => item.fileId)
      .map((item) => {
        return this.fileService.apiFileFileIdDelete({
          fileId: item.fileId!
        });
      });

    const fileUploads$ = fileDetails
      .filter((item) => item.file)
      .map((item: FileUploadItem) => {
        return this.fileService
          .apiFilePost({
            file: item.file as File
          })
          .pipe(tap((res) => (item.fileId = res.data)));
      });

    const mainImage = formValue[CourseDetailFormKey.MAIN_IMAGE];
    const mainImageUpload$ =
      typeof mainImage !== 'string' && mainImage
        ? this.uploadService
            .apiUploadFilePost({
              fileType: 'image',
              path: 'course',
              file: mainImage as File
            })
            .pipe(tap((res) => (formValue.main_image = res.fileUrl)))
        : of(null);

    const forkSources = [
      ...fileRemoves$,
      ...fileUploads$,
      mainImageUpload$,
      of(null)
    ];
    forkJoin(forkSources)
      .pipe(
        switchMap(() =>
          this.teacherCourseService.apiTeacherCourseCoursesDraftPost({
            postTeacherCourseDraftRequestModel: {
              ...(this.courseId() ? { _id: this.courseId() } : {}),
              ...(formValue as any),
              file_details: fileDetails.map(
                (item) =>
                  ({
                    id: item.id || null,
                    name: item.name,
                    fileId: item.fileId || null
                  }) as FileDetails
              )
            }
          })
        )
      )
      .subscribe(() => this.getCourse());
  }

  reset() {
    if (this.courseData) {
      this.setFormValues(this.courseData);
    } else {
      this.formGroup.reset();
    }
  }

  togglePublished() {
    if (!this.courseId()) {
      return;
    }

    const apiCall =
      this.courseData?.status === CourseStatus.PUBLISHED
        ? this.teacherCourseService.apiTeacherCourseCoursesCourseIdUnpublishPost(
            { courseId: this.courseId() as string }
          )
        : this.teacherCourseService.apiTeacherCourseCoursesCourseIdPublishPost({
            courseId: this.courseId() as string
          });

    apiCall.subscribe({
      next: () => {
        this.getCourse();
      },
      error: (res) => {
        this.dialogService
          .openAlertDialog({
            title: '發生錯誤',
            content: res.error.message
          })
          .closed.subscribe(() => this.getCourse());
      }
    });
  }

  private setFormValues(courseData: GetTeacherCourseResponseModelData) {
    const {
      name = '',
      main_image = '',
      content = '',
      price_quantity = [],
      main_category = null,
      sub_category = null,
      city_id = null,
      dist_id = null,
      survey_url = null,
      status = null,
      teacher_id = null,
      purchase_message = null,
      video_ids = [],
      file_details = [],
      file_url_details = []
    } = courseData;

    this.formGroup.setValue({
      name,
      main_image,
      content,
      price_quantity: price_quantity.map((item) => ({
        _id: item._id || null,
        price: item.price || null,
        quantity: item.quantity || null
      })),
      main_category,
      sub_category,
      city_id,
      dist_id,
      survey_url,
      status,
      teacher_id,
      purchase_message,
      video_ids,
      file_details: file_details.map((item) => ({
        id: item.id || null,
        name: item.name || null,
        fileId: item.fileId || null
      })),
      file_url_details: file_url_details.map((item) => ({
        id: item.id || null,
        name: item.name || null,
        url: item.url || null
      }))
    });
  }
}
