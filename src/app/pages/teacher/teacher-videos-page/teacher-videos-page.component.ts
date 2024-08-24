import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputComponent, InputType } from '@tmf/libs-shared/components';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import {
  StudentInfoService,
  UploadService,
  StudentInfoResponseModelData,
  TeacherVideoService,
  GetTeacherVideoListResponseModelDataInner
} from 'libs/openapi/src';
import { switchMap, throwError } from 'rxjs';
import { TmfDatePipe } from 'src/app/shared/pipes/tmf-date.pipe';
import { DialogService } from 'src/app/shared/services/dialog.service';
interface StudentInfoForm {
  avator_image: FormControl<string | null>;
  name: FormControl<string | null>;
  nick_name: FormControl<string | null>;
  birthday: FormControl<string | null>;
  contact_phone: FormControl<string | null>;
  email: FormControl<string | null>;
}
interface StudentInfoForm {
  avator_image: FormControl<string | null>;
  name: FormControl<string | null>;
  nick_name: FormControl<string | null>;
  birthday: FormControl<string | null>;
  contact_phone: FormControl<string | null>;
  email: FormControl<string | null>;
}

@Component({
  selector: 'app-teacher-videos-page',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    TmfDatePipe,
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    TmfDatePipe,
    VideoCardComponent,
    RouterModule
  ],
  templateUrl: './teacher-videos-page.component.html',
  styleUrl: './teacher-videos-page.component.scss'
})
export default class TeacherVideosPageComponent {
  data?: (VideoCardData & GetTeacherVideoListResponseModelDataInner)[];

  isEditMode = signal(false);
  fb = inject(FormBuilder);
  private teacherVideoService = inject(TeacherVideoService);
  private uploadService = inject(UploadService);
  private dialogService = inject(DialogService);

  readonly InputType = InputType;

  formGroup: FormGroup<StudentInfoForm> = this.fb.group<StudentInfoForm>({
    avator_image: this.fb.control(null),
    name: this.fb.control(null),
    nick_name: this.fb.control(null),
    birthday: this.fb.control(null),
    contact_phone: this.fb.control(null),
    email: this.fb.control(null)
  });

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.teacherVideoService.apiTeacherVideoGet().subscribe({
      next: (res) => {
        if (res.status) {
          this.data = res.data.map((item) =>
            this.transformToVideoCardData(item)
          )!;
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
  ): VideoCardData & GetTeacherVideoListResponseModelDataInner {
    return Object.assign(item, { video_id: item._id });
  }

  delete(id: string) {
    this.teacherVideoService
      .apiTeacherVideoVideoIdDelete({
        videoId: id
      })
      .subscribe((res) => {
        this.dialogService.openAlertDialog({
          title: '刪除成功',
          content: res.data.message
        });
        this.loadData();
      });
  }
}
