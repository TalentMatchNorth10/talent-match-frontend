import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component, inject, OnInit } from '@angular/core';
import {
  CommonService,
  GetTeacherInfoResponseModelData,
  GetTeacherVideoListResponseModelDataInner,
  TeacherInfoService,
  TeacherVideoService,
  UploadService
} from 'libs/openapi/src';
import { TeacherFormService } from '../../teacher-apply-page/teacher-form.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { DialogService } from '@tmf/shared';
import {
  learningExperienceForm,
  TagOption,
  TeacherInfoForm,
  teachingCertificateForm,
  teachingCertificateInfoForm,
  UploadQueueItem
} from '../../teacher-apply-page/teacher-apply-page.model';
import {
  CheckboxComponent,
  InputComponent,
  InputType,
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import { CommonModule } from '@angular/common';
import { GroupType, Item } from './teacher-info-page.model';
import { QuillEditorComponent } from '@tmf/libs-shared/components/form/quill-editor/quill-editor.component';
import { catchError, EMPTY, filter, forkJoin, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-teacher-info-page',
  standalone: true,
  imports: [
    CdkAccordionModule,
    ReactiveFormsModule,
    CommonModule,
    SelectComponent,
    OptionComponent,
    QuillEditorComponent,
    InputComponent,
    CheckboxComponent
  ],
  templateUrl: './teacher-info-page.component.html',
  styleUrl: './teacher-info-page.component.scss'
})
export default class TeacherInfoPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private teacherFormService = inject(TeacherFormService);
  private commonService = inject(CommonService);
  private teacherInfoService = inject(TeacherInfoService);
  private teacherVideoService = inject(TeacherVideoService);
  private uploadService = inject(UploadService);
  private dialogService = inject(DialogService);

  items: Item[] = [
    {
      id: GroupType.Info,
      title: '基本資料',
      isEditMode: false
    },
    {
      id: GroupType.Learning_experience,
      title: '學歷背景',
      isEditMode: false
    },
    {
      id: GroupType.Work_experience,
      title: '工作經歷',
      isEditMode: false
    },
    {
      id: GroupType.Teaching_certificate,
      title: '教學證照',
      isEditMode: false
    },
    {
      id: GroupType.Video,
      title: '自介影片',
      isEditMode: false
    }
  ];

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

  videoList: GetTeacherVideoListResponseModelDataInner[] = [];

  defaultData!: GetTeacherInfoResponseModelData;
  uploadQueue: UploadQueueItem[] = [];

  teacherForm!: FormGroup<TeacherInfoForm>;
  topicControl = this.fb.control<string[] | null>([]);
  videoControl = this.fb.control<string[] | null>([]);

  formControlMap = {
    [GroupType.All]: [],
    [GroupType.Info]: ['categories', 'nationality', 'introduction'],
    [GroupType.Learning_experience]: ['learning_experience'],
    [GroupType.Work_experience]: ['work_experiences'],
    [GroupType.Teaching_certificate]: ['teaching_certificates'],
    [GroupType.Video]: []
  };

  get introduceControl() {
    return this.teacherForm.controls.introduction;
  }

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
      FormGroup<teachingCertificateInfoForm>
    >;
  }

  readonly GroupType = GroupType;
  readonly InputType = InputType;

  ngOnInit(): void {
    this.teacherForm = this.teacherFormService.createTeacherForm('info');
    this.initData();
    this.getOptions();
  }

  initData() {
    this.updateData(GroupType.All);
    this.teacherVideoService.apiTeacherVideoGet().subscribe((res) => {
      this.videoList = res.data;
    });
  }

  updateData(type: GroupType) {
    this.teacherInfoService.apiTeacherInfoGet().subscribe((res) => {
      this.defaultData = res.data;

      switch (type) {
        case GroupType.All: {
          // Info
          this.topicControl.setValue(
            res.data.categories.map((category) => category.category_id!) || []
          );
          this.handleCategoryChange(this.topicControl.value || []);
          this.formControlMap[GroupType.Info].forEach((name) => {
            this.teacherForm.get(name)?.reset((this.defaultData as any)[name]);
          });
          this.topicControl.disable();

          // Learning experience
          this.learning_experience.patchValue(
            this.defaultData.learning_experience
          );
          this.learning_experience.disable();

          // Work experience
          this.work_experiences.clear();
          this.defaultData.work_experiences.forEach(() => {
            this.addGroup(GroupType.Work_experience);
          });
          this.work_experiences.patchValue(this.defaultData.work_experiences);
          this.work_experiences.disable();

          // Teaching certificate
          this.teaching_certificates.clear();
          this.defaultData.teaching_certificates.forEach(() => {
            this.addGroup(GroupType.Teaching_certificate);
          });
          this.teaching_certificates.patchValue(
            this.defaultData.teaching_certificates
          );
          this.teaching_certificates.disable();

          // Video
          this.videoControl.setValue(
            res.data.intro_video.map((video) => video.video_id!) || []
          );
          this.videoControl.disable();

          this.teacherForm.disable();
          break;
        }
        case GroupType.Info: {
          this.topicControl.setValue(
            res.data.categories.map((category) => category.category_id!) || []
          );
          this.handleCategoryChange(this.topicControl.value || []);
          this.formControlMap[GroupType.Info].forEach((name) => {
            this.teacherForm.get(name)?.reset((this.defaultData as any)[name]);
          });
          this.topicControl.disable();
          this.teacherForm.disable();
          break;
        }
        case GroupType.Learning_experience: {
          this.learning_experience.patchValue(
            this.defaultData.learning_experience
          );
          this.learning_experience.disable();
          break;
        }
        case GroupType.Work_experience: {
          this.work_experiences.clear();
          this.defaultData.work_experiences.forEach(() => {
            this.addGroup(GroupType.Work_experience);
          });
          this.work_experiences.patchValue(this.defaultData.work_experiences);
          this.work_experiences.disable();
          break;
        }
        case GroupType.Teaching_certificate: {
          this.teaching_certificates.clear();
          this.defaultData.teaching_certificates.forEach(() => {
            this.addGroup(GroupType.Teaching_certificate);
          });
          this.teaching_certificates.patchValue(
            this.defaultData.teaching_certificates
          );
          this.teaching_certificates.disable();
          break;
        }
        case GroupType.Video:
          this.videoControl.setValue(
            res.data.intro_video.map((video) => video.video_id!) || []
          );
          this.videoControl.disable();
          break;
      }
    });
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

  changeMode(item: Item, isEditMode: boolean) {
    item.isEditMode = isEditMode;
    const controlNames = this.formControlMap[item.id];
    if (!isEditMode) {
      this.reset(item);
    }

    if (item.id === GroupType.Info) {
      this.topicControl?.[item.isEditMode ? 'enable' : 'disable']();
    }

    if (item.id === GroupType.Video) {
      this.videoControl?.[item.isEditMode ? 'enable' : 'disable']();
    }
    this.toggleFormControls(controlNames, isEditMode);
  }

  private toggleFormControls(controlNames: string[], isEditMode: boolean) {
    controlNames.forEach((name) => {
      const control = this.teacherForm.get(name);
      if (control) {
        isEditMode ? control.enable() : control.disable();
      }
    });
  }

  save(item: Item) {
    if (this.checkValid(item)) {
      const formData = this.teacherForm.getRawValue();
      switch (item.id) {
        case GroupType.Info: {
          this.teacherInfoService
            .apiTeacherInfoBasicPatch({
              patchTeacherInfoBasicRequestModel: {
                nationality: formData.nationality!,
                categories: formData.categories.map((category) => ({
                  category_id: category.category_id!,
                  sub_categories: category.sub_categories!
                })),
                introduction: formData.introduction!
              }
            })
            .subscribe(() => {
              this.changeMode(item, false);
              this.updateData(GroupType.Info);
            });
          break;
        }
        case GroupType.Learning_experience: {
          const uploadQueueItem = this.uploadQueue.find(
            (item) => item.type === 'degree'
          );
          const prevFilePath = formData.learning_experience.file;
          const createUpdate$ = () => {
            return this.teacherInfoService.apiTeacherInfoEducationPatch({
              patchTeacherInfoEducationRequestModel: {
                is_in_school: formData.learning_experience.is_in_school!,
                degree: formData.learning_experience.degree!,
                department: formData.learning_experience.department!,
                start_year: formData.learning_experience.start_year!,
                start_month: formData.learning_experience.start_month!,
                end_year: !formData.learning_experience.is_in_school
                  ? formData.learning_experience.end_year!
                  : null,
                end_month: !formData.learning_experience.is_in_school
                  ? formData.learning_experience.end_month!
                  : null,
                name: formData.learning_experience.name!,
                region: formData.learning_experience.region!,
                file: this.learning_experience.controls.file.value || ''
              }
            });
          };

          let update$;
          if (uploadQueueItem) {
            update$ = this.getUploadFile$(uploadQueueItem, prevFilePath).pipe(
              switchMap((res) => createUpdate$())
            );
          } else {
            update$ = createUpdate$();
          }

          update$.subscribe({
            next: () => {
              this.changeMode(item, false);
              this.updateData(GroupType.Learning_experience);
              this.uploadQueue = this.uploadQueue.filter(
                (item) => item.type !== 'degree'
              );
            },
            error: () => {
              this.dialogService.openAlertDialog({
                title: '錯誤',
                content: '更新學歷失敗'
              });
            }
          });
          break;
        }
        case GroupType.Work_experience: {
          const update$ = this.teacherInfoService.apiTeacherInfoWorkPatch({
            patchTeacherInfoWorkRequestModelInner:
              formData.work_experiences.map((workExperience) => ({
                _id: workExperience._id || null,
                company_name: workExperience.company_name!,
                workplace: workExperience.workplace!,
                job_title: workExperience.job_title!,
                job_category: workExperience.job_category!,
                start_year: workExperience.start_year!,
                start_month: workExperience.start_month!,
                ...(!workExperience.is_working
                  ? {
                      end_year: workExperience.end_year!,
                      end_month: workExperience.end_month!
                    }
                  : {}),
                is_working: workExperience.is_working!
              }))
          });

          update$.subscribe(() => {
            this.changeMode(item, false);
            this.updateData(GroupType.Work_experience);
          });
          break;
        }
        case GroupType.Teaching_certificate: {
          const fileUpdateArr$ = this.uploadQueue
            .filter((item) => item.type === 'certificate')
            .map((item) => {
              const prevFilePath = item.control.value || null;
              return this.getUploadFile$(item, prevFilePath);
            });

          const createUpdate$ = () => {
            return this.teacherInfoService.apiTeacherInfoCertificatePatch({
              patchTeacherInfoCertificateRequestModelInner:
                formData.teaching_certificates.map(
                  (teachingCertificate, i) => ({
                    _id: teachingCertificate._id || null,
                    name: teachingCertificate.name!,
                    file: this.teaching_certificates.controls[i].controls.file
                      .value!,
                    category_id: teachingCertificate.category_id!,
                    license_name: teachingCertificate.license_name!,
                    license_number: teachingCertificate.license_number!,
                    subject: teachingCertificate.subject!,
                    verifying_institution:
                      teachingCertificate.verifying_institution!
                  })
                )
            });
          };

          let update$;
          if (fileUpdateArr$.length) {
            update$ = forkJoin(fileUpdateArr$).pipe(
              switchMap(() => createUpdate$())
            );
          } else {
            update$ = createUpdate$();
          }

          update$.subscribe({
            next: () => {
              this.changeMode(item, false);
              this.updateData(GroupType.Teaching_certificate);
              this.uploadQueue = this.uploadQueue.filter(
                (item) => item.type !== 'certificate'
              );
            },
            error: () => {
              this.dialogService.openAlertDialog({
                title: '錯誤',
                content: '更新教學證照失敗'
              });
            }
          });
          break;
        }
        case GroupType.Video: {
          const videos = this.videoControl.value;
          if (!videos) {
            return;
          }

          this.teacherInfoService
            .apiTeacherInfoVideoPatch({
              patchTeacherInfoVideoRequestModelInner: videos.map((video) => {
                const matchVideo = this.videoList.find(
                  (item) => item._id === video
                );

                return {
                  video_id: matchVideo?._id,
                  title: matchVideo?.name
                };
              })
            })
            .subscribe(() => {
              this.changeMode(item, false);
              this.updateData(GroupType.Video);
            });
          break;
        }
      }
    } else {
      this.dialogService.openAlertDialog({
        title: '錯誤',
        content: '請填寫完整資料!'
      });
    }
  }

  private getUploadFile$(item: UploadQueueItem, prevFilePath?: string | null) {
    let upload$;
    if (prevFilePath && prevFilePath !== 'hasFile') {
      upload$ = this.uploadService
        .apiUploadFileDelete({
          deleteRequestModel: { fileUrl: prevFilePath }
        })
        .pipe(
          switchMap(() =>
            this.uploadService.apiUploadFilePost({
              fileType: 'file',
              path: item.type,
              file: item.file
            })
          )
        );
    } else {
      upload$ = this.uploadService.apiUploadFilePost({
        fileType: 'file',
        path: item.type,
        file: item.file
      });
    }

    return upload$.pipe(
      catchError(() => {
        this.dialogService.openAlertDialog({
          title: '錯誤',
          content: '檔案上傳失敗!'
        });

        return EMPTY;
      }),
      tap((res) => item.control.setValue(res.fileUrl || ''))
    );
  }

  private checkValid(item: Item) {
    switch (item.id) {
      case GroupType.Info:
        return (
          this.formControlMap[GroupType.Info].every(
            (name) => this.teacherForm.get(name)?.valid ?? false
          ) && this.topicControl.valid
        );
      case GroupType.Learning_experience:
        return this.learning_experience?.valid;
      case GroupType.Work_experience:
        return this.work_experiences.valid;
      case GroupType.Teaching_certificate:
        return this.teaching_certificates.valid;
      default:
        return true;
    }
  }

  reset(item: Item) {
    switch (item.id) {
      case GroupType.Info:
        this.topicControl.setValue(
          this.defaultData.categories.map(
            (category) => category.category_id!
          ) || []
        );
        this.handleCategoryChange(this.topicControl.value || []);
        this.formControlMap[GroupType.Info].forEach((name) => {
          this.teacherForm.get(name)?.reset((this.defaultData as any)[name]);
        });
        break;
      case GroupType.Learning_experience:
        this.learning_experience?.patchValue(
          this.defaultData.learning_experience
        );
        break;
      case GroupType.Work_experience:
        this.work_experiences.clear();
        this.defaultData.work_experiences.forEach(() => {
          this.addGroup(GroupType.Work_experience);
        });
        this.work_experiences.patchValue(this.defaultData.work_experiences);
        break;
      case GroupType.Teaching_certificate:
        this.teaching_certificates.clear();
        this.defaultData.teaching_certificates.forEach(() => {
          this.addGroup(GroupType.Teaching_certificate);
        });
        this.teaching_certificates.patchValue(
          this.defaultData.teaching_certificates
        );
        break;
    }
  }

  addGroup(type: GroupType) {
    switch (type) {
      case GroupType.Work_experience:
        this.work_experiences.push(
          this.teacherFormService.createWorkExperience('info')
        );
        break;
      case GroupType.Teaching_certificate:
        this.teaching_certificates.push(
          this.teacherFormService.createTeachingCertificate('info')
        );
        break;
    }
  }

  removeGroup(type: GroupType, index: number) {
    this.dialogService
      .openConfirmDialog({
        title: '刪除確認',
        content: `確定要刪除此${type === GroupType.Work_experience ? '工作經歷' : '教學證照'}嗎?`
      })
      .pipe(filter((result) => result))
      .subscribe(() => {
        switch (type) {
          case GroupType.Work_experience:
            this.work_experiences.removeAt(index);
            break;
          case GroupType.Teaching_certificate:
            this.teaching_certificates.removeAt(index);
            break;
        }
      });
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
        const infoItem = this.items.find((item) => item.id === GroupType.Info);
        categories.push(
          this.fb.group({
            category_id: this.fb.control(id, [Validators.required]),
            sub_categories: this.fb.control<string[] | null>(
              {
                value: [],
                disabled: !infoItem?.isEditMode
              },
              [Validators.required]
            )
          })
        );
      }
    });
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
    control.setValue(control.value || 'hasFile');

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
