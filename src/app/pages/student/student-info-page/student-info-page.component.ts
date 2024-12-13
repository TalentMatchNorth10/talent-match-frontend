import { CommonModule } from '@angular/common';
import { UploadService } from './../../../../../libs/openapi/src/api/upload.service';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import {
  StudentInfoResponseModelData,
  StudentInfoService
} from 'libs/openapi/src';
import { InputComponent, InputType } from 'libs/shared/src';
import { switchMap, throwError } from 'rxjs';
import { TmfDatePipe } from 'src/app/shared/pipes/tmf-date.pipe';

interface StudentInfoForm {
  avator_image: FormControl<string | null>;
  name: FormControl<string | null>;
  nick_name: FormControl<string | null>;
  birthday: FormControl<string | null>;
  contact_phone: FormControl<string | null>;
  email: FormControl<string | null>;
}

@Component({
  selector: 'app-student-info-page',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule, TmfDatePipe],
  templateUrl: './student-info-page.component.html',
  styleUrl: './student-info-page.component.scss'
})
export default class StudentInfoPageComponent {
  studentInfo!: StudentInfoResponseModelData;
  isEditMode = signal(false);
  fb = inject(FormBuilder);
  private studentInfoService = inject(StudentInfoService);
  private uploadService = inject(UploadService);

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
    this.studentInfoService.apiStudentInfoBasicInfoGet().subscribe((res) => {
      if (res.status) {
        this.studentInfo = res.data!;
        this.updateFormControls(this.studentInfo);
        this.formGroup.disable();
      }
    });
  }

  updateStudentInfo() {
    this.studentInfoService
      .apiStudentInfoBasicInfoPatch({
        updateStudentInfoRequestModel: {
          avator_image: this.formGroup.controls.avator_image.value!,
          name: this.formGroup.controls.name.value!,
          nick_name: this.formGroup.controls.nick_name.value!,
          birthday: this.formGroup.controls.birthday.value!,
          contact_phone: this.formGroup.controls.contact_phone.value!,
          email: this.formGroup.controls.email.value!
        }
      })
      .pipe(
        switchMap((res) => {
          if (res.status) {
            return this.studentInfoService.apiStudentInfoBasicInfoGet();
          } else {
            return throwError(() => new Error('Failed to update student info'));
          }
        })
      )
      .subscribe({
        next: (res) => {
          if (res.status) {
            this.studentInfo = res.data!;
            this.updateFormControls(this.studentInfo);
            this.isEditMode.set(false);
          }
        }
      });
  }

  uploadImage(event: any) {
    this.uploadService
      .apiUploadFilePost({
        fileType: 'image',
        path: 'user',
        file: event.target.files[0]
      })
      .subscribe((res) => {
        this.formGroup.controls.avator_image.setValue(res.fileUrl || '');
      });
  }

  openEditMode() {
    this.isEditMode.set(true);
    this.formGroup.enable();
  }

  cancelEditMode() {
    this.isEditMode.set(false);
    this.formGroup.disable();
    this.formGroup.controls.avator_image.setValue(
      this.studentInfo.avator_image!
    );
  }

  private updateFormControls(studentInfo: StudentInfoResponseModelData) {
    this.formGroup.setValue({
      avator_image: studentInfo.avator_image!,
      name: studentInfo.name!,
      nick_name: studentInfo.nick_name!,
      birthday: new Date(studentInfo.birthday!).toISOString().split('T')[0],
      contact_phone: studentInfo.contact_phone!,
      email: studentInfo.email!
    });
  }
}
