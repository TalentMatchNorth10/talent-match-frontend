import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
  FormControl
} from '@angular/forms';
import {
  CheckboxComponent,
  InputComponent,
  InputType,
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import {
  GroupType,
  learningExperienceForm,
  TagOption,
  TeacherApplyForm,
  teachingCertificateForm,
  UploadQueueItem
} from './teacher-apply-page.model';
import { TeacherFormService } from './teacher-form.service';
import {
  CommonService,
  HomeService,
  PostTeacherInfoRequestModel,
  UploadService
} from 'libs/openapi/src';
import { DialogService } from 'src/app/shared/services/dialog.service';
import {
  catchError,
  filter,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError
} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-apply-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    OptionComponent,
    InputComponent,
    CheckboxComponent
  ],
  templateUrl: './teacher-apply-page.component.html',
  styleUrl: './teacher-apply-page.component.scss'
})
export default class TeacherApplyPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private teacherFormService = inject(TeacherFormService);
  private commonService = inject(CommonService);
  private uploadService = inject(UploadService);
  private homeService = inject(HomeService);
  private dialogService = inject(DialogService);
  private router = inject(Router);

  readonly InputType = InputType;

  tagOptions: TagOption[] = [];
  nationOptions: OptionType[] = [];
  jobCategoryOptions: OptionType[] = [];
  yearOptions: OptionType[] = [];
  monthOptions: OptionType[] = [];
  degreeOptions: OptionType[] = [];
  regionOptions: OptionType[] = [
    {
      label: '台灣',
      value: true
    },
    {
      label: '海外',
      value: false
    }
  ];

  teacherForm!: FormGroup<TeacherApplyForm>;
  topicControl = this.fb.control<string[] | null>([]);

  uploadQueue: UploadQueueItem[] = [];

  get categoriesFormArray() {
    return this.teacherForm.controls.categories;
  }

  get work_experiences() {
    return this.teacherForm.get('work_experiences') as FormArray;
  }

  get learning_experience() {
    return this.teacherForm.get(
      'learning_experience'
    ) as FormGroup<learningExperienceForm>;
  }

  get teaching_certificates() {
    return this.teacherForm.get('teaching_certificates') as FormArray<
      FormGroup<teachingCertificateForm>
    >;
  }

  steps = [
    { name: '基本資料' },
    { name: '履歷' },
    { name: '學歷背景' },
    { name: '教學證照' }
  ];

  currentStepIndex = 0;

  items: OptionType[] = [
    { label: 'A', value: 1 },
    { label: 'B', value: 2 }
  ];

  ngOnInit(): void {
    this.teacherForm = this.teacherFormService.createTeacherForm();
    this.getOptions();
  }

  getOptions() {
    this.commonService.apiCommonTagGet().subscribe((res) => {
      this.tagOptions = res.data.map((tag) => ({
        value: tag._id,
        main_category: tag.main_category,
        sub_category: tag.sub_category
      }));
    });
    this.commonService.apiCommonOptionsNationGet().subscribe((res) => {
      this.nationOptions = res.data;
    });
    this.commonService.apiCommonOptionsJobCategoryGet().subscribe((res) => {
      this.jobCategoryOptions = res.data;
    });
    const currentYear = new Date().getFullYear();
    this.yearOptions = Array.from({ length: 16 }, (_, i) => {
      const year = currentYear - i;
      return { label: `${year}`, value: `${year}` };
    });
    this.monthOptions = Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      return { label: `${month}`, value: `${month}` };
    });
    this.commonService.apiCommonOptionsDegreeGet().subscribe((res) => {
      this.degreeOptions = res.data;
    });
  }

  nextStep() {
    const stepValidations = [
      {
        controls: ['nationality', 'categories'],
        errorTitle: '填寫錯誤',
        errorContent: '基本資料未填寫完成'
      },
      {
        controls: ['work_experiences'],
        errorTitle: '填寫錯誤',
        errorContent: '履歷未填寫完成'
      },
      {
        controls: ['learning_experience'],
        errorTitle: '填寫錯誤',
        errorContent: '學歷背景未填寫完成'
      },
      {
        controls: ['teaching_certificates'],
        errorTitle: '填寫錯誤',
        errorContent: '教學證照未填寫完成'
      }
    ];

    // 驗證當前步驟的控件
    const currentValidation = stepValidations[this.currentStepIndex];
    if (currentValidation) {
      const invalidControls = currentValidation.controls.filter(
        (controlName: string) => this.teacherForm.get(controlName)?.invalid
      );

      if (invalidControls.length > 0) {
        this.dialogService.openAlertDialog({
          title: currentValidation.errorTitle,
          content: currentValidation.errorContent
        });
        return;
      }
    }

    // 如果還有下一步，進入下一步
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  onSubmit() {
    const uploadFile = (item: UploadQueueItem) => {
      return this.uploadService.apiUploadFilePost({
        fileType: 'file',
        path: item.type,
        file: item.file as Blob
      });
    };

    const uploadObservables: Observable<{
      type: UploadQueueItem['type'];
      error: boolean;
    }>[] = this.uploadQueue.map((item) =>
      uploadFile(item).pipe(
        tap(({ fileUrl }) => item.control.setValue(fileUrl || '')),
        map(() => ({
          type: item.type,
          error: false
        })),
        catchError(() => {
          item.control.setValue(null);
          return of({
            type: item.type,
            error: true
          });
        })
      )
    );

    if (this.teacherForm.valid) {
      this.dialogService
        .openConfirmDialog({
          title: '提交申請',
          content: '確定要提交申請嗎？'
        })
        .pipe(
          filter((result) => result),
          switchMap(() => forkJoin(uploadObservables))
        )
        .subscribe((results) => {
          const failures = results.filter((r) => r.error);
          if (failures.length > 0) {
            const degreeError = failures.some((r) => r.type === 'degree');
            this.dialogService
              .openAlertDialog({
                title: '上傳失敗',
                content: degreeError ? '學位證明上傳失敗' : '證照上傳失敗'
              })
              .closed.subscribe(() =>
                degreeError
                  ? (this.currentStepIndex = 2)
                  : (this.currentStepIndex = 3)
              );
          } else {
            this.homeService
              .apiHomeTeacherApplyPost({
                postTeacherInfoRequestModel:
                  this.teacherForm.getRawValue() as PostTeacherInfoRequestModel
              })
              .pipe(
                catchError((error) => {
                  this.dialogService.openAlertDialog({
                    title: '提交失敗',
                    content: '申請提交失敗，請重新提交'
                  });
                  return throwError(() => error);
                }),
                switchMap(() => {
                  return this.dialogService.openAlertDialog({
                    title: '提交成功',
                    content: '申請已提交成功'
                  }).closed;
                })
              )
              .subscribe(() => {
                this.router.navigate(['/home']);
              });
          }
        });
    } else {
      this.dialogService
        .openAlertDialog({
          title: '填寫錯誤',
          content: '請填寫完整資料'
        })
        .closed.subscribe();
    }
  }

  addGroup(type: GroupType) {
    switch (type) {
      case 'work_experience':
        this.work_experiences.push(
          this.teacherFormService.createWorkExperience()
        );
        break;
      case 'teaching_certificate':
        this.teaching_certificates.push(
          this.teacherFormService.createTeachingCertificate()
        );
        break;
    }
  }

  removeGroup(type: GroupType, index: number) {
    switch (type) {
      case 'work_experience':
        this.work_experiences.removeAt(index);
        break;
      case 'teaching_certificate':
        this.teaching_certificates.removeAt(index);
        break;
    }
  }

  getCategoryLabel(categoryId: string) {
    const tag = this.tagOptions.find((tag) => tag.value === categoryId);
    return tag?.main_category || '';
  }

  getSubCategoryOptions(categoryId: string) {
    const category = this.tagOptions.find((tag) => tag.value === categoryId);
    return category?.sub_category || [];
  }

  handleCategoryChange(value: string[]) {
    const categories = this.teacherForm.controls.categories;
    const valueSet = new Set(value);

    // 移除不在 value 中的 category
    for (let i = categories.controls.length - 1; i >= 0; i--) {
      const group = categories.controls[i];
      if (!valueSet.has(group.controls.category_id.value!)) {
        categories.removeAt(i);
      }
    }

    // 添加新的 category
    value.forEach((id) => {
      const categoryExists = categories.controls.some(
        (group) => group.controls.category_id.value === id
      );

      if (!categoryExists) {
        categories.push(
          this.fb.group({
            category_id: this.fb.control(id, [Validators.required]),
            sub_categories: this.fb.control<string[] | null>(
              [],
              [Validators.required]
            )
          })
        );
      }
    });
  }

  handleIsWorkingChange(isWorking: boolean, index: number) {
    const workExperience = this.work_experiences.controls[index];
    const endYearControl = workExperience.get('end_year');
    const endMonthControl = workExperience.get('end_month');

    if (isWorking) {
      endYearControl?.reset();
      endMonthControl?.reset();
      endYearControl?.disable();
      endMonthControl?.disable();
      endYearControl?.setValidators(null);
      endMonthControl?.setValidators(null);
    } else {
      endYearControl?.enable();
      endMonthControl?.enable();
      endYearControl?.setValidators([Validators.required]);
      endMonthControl?.setValidators([Validators.required]);
    }

    endYearControl?.updateValueAndValidity();
  }

  handleIsInSchoolChange(isInSchool: boolean) {
    const learningExperience = this.learning_experience;
    const endYearControl = learningExperience.get('end_year');
    const endMonthControl = learningExperience.get('end_month');

    if (isInSchool) {
      endYearControl?.reset();
      endMonthControl?.reset();
      endYearControl?.disable();
      endMonthControl?.disable();
      endYearControl?.setValidators(null);
      endMonthControl?.setValidators(null);
    } else {
      endYearControl?.enable();
      endMonthControl?.enable();
      endYearControl?.setValidators([Validators.required]);
      endMonthControl?.setValidators([Validators.required]);
    }

    endYearControl?.updateValueAndValidity();
  }

  handleFileChange(
    event: Event,
    control: FormControl,
    type: 'degree' | 'certificate'
  ) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (!file) {
      return;
    }
    control.setValue('hasFile');

    const inQueueItem = this.uploadQueue.find(
      (item) => item.control === control
    );

    if (inQueueItem) {
      inQueueItem.file = file;
    } else {
      this.uploadQueue.push({ file, type, control });
    }
  }
}
