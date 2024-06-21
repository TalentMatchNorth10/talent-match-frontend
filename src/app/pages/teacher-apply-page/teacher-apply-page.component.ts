import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import {
  CheckboxComponent,
  InputComponent,
  InputType,
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import { TeacherApplyForm } from './teacher-apply-page.model';
import { TeacherFormService } from './teacher-form.service';
import {
  CommonService,
  TagsResponseModelDataInner,
  UserInfoResponseModelData,
  UserService
} from 'libs/openapi/src';

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
  private userService = inject(UserService);
  private commonService = inject(CommonService);

  readonly InputType = InputType;

  user: UserInfoResponseModelData | null = null;

  tagOptions: TagsResponseModelDataInner[] = [];
  selectTag!: TagsResponseModelDataInner | null;

  mainCategoryOptions: OptionType[] = [];
  subCategoryOptions: SubCategoryOptions[] = [];

  teacherForm!: FormGroup;

  steps = [
    { name: '填寫基本資料', completed: false },
    { name: '填寫履歷', completed: false },
    { name: '填寫學歷背景', completed: false },
    { name: '填寫教學證照', completed: false }
  ];

  currentStepIndex = 0;

  items: OptionType[] = [
    { label: 'A', value: 1 },
    { label: 'B', value: 2 }
  ];

  ngOnInit(): void {
    this.teacherForm = this.teacherFormService.createTeacherForm();
    this.teacherForm.patchValue({ user_id: this.user?.nick_name });
    this.getTags();
  }

  getUserInfo() {
    this.userService.apiUserUserInfoGet().subscribe({
      next: (res) => {
        this.user = res.data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getTags() {
    this.commonService.apiCommonTagGet().subscribe((res) => {
      this.tagOptions = res.data;
      this.tagOptions.forEach((item) => {
        const option: OptionType = {
          label: item.main_category as string,
          value: item.main_category
        };
        this.mainCategoryOptions.push(option);
      });
    });
  }

  getSubCategoryOptions($event: any) {
    const result: SubCategoryOptions[] = [];

    $event.forEach((category: string) => {
      const found = this.tagOptions.find(
        (item) => item.main_category === category
      );
      if (found && found.sub_category) {
        const subCategoryOptions = found.sub_category.map((subCat) => ({
          label: subCat,
          value: subCat
        }));
        result.push({ mainCategory: category, subCategoryOptions });
      }
    });

    this.subCategoryOptions = result;
  }

  // Stepper
  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  completeStep(index: number) {
    this.steps[index].completed = true;
  }

  // Teacher Form
  onSubmit() {
    if (this.teacherForm.valid) {
      console.log(this.teacherForm.value);
    }
  }

  get main_categorys() {
    return this.teacherForm.get('main_categorys') as FormArray;
  }

  addMainCategory() {
    this.main_categorys.push(this.fb.control(''));
  }

  removeMainCategory(index: number) {
    this.main_categorys.removeAt(index);
  }

  get sub_categorys() {
    return this.teacherForm.get('sub_categorys') as FormArray;
  }

  addSubCategory() {
    this.sub_categorys.push(this.fb.control(''));
  }

  removeSubCategory(index: number) {
    this.sub_categorys.removeAt(index);
  }

  get work_experiences() {
    return this.teacherForm.get('work_experiences') as FormArray;
  }

  addWorkExperience() {
    console.log('add workExperience');
    this.work_experiences.push(this.teacherFormService.createWorkExperience());
  }

  removeWorkExperience(index: number) {
    this.work_experiences.removeAt(index);
  }

  get teaching_certificate() {
    return this.teacherForm.get('teaching_certificate') as FormArray;
  }

  addTeachingCertificate() {
    this.teaching_certificate.push(
      this.teacherFormService.createTeachingCertificate()
    );
  }

  removeTeachingCertificate(index: number) {
    this.teaching_certificate.removeAt(index);
  }

  get courses() {
    return this.teacherForm.get('courses') as FormArray;
  }

  addCourse() {
    this.courses.push(this.fb.control(''));
  }

  removeCourse(index: number) {
    this.courses.removeAt(index);
  }

  get can_reserve_week() {
    return this.teacherForm.get('can_reserve_week') as FormArray;
  }

  addCanReserveWeek() {
    this.can_reserve_week.push(this.teacherFormService.createCanReserveWeek());
  }

  removeCanReserveWeek(index: number) {
    this.can_reserve_week.removeAt(index);
  }

  addTimeSlot(weekIndex: number) {
    const control = this.can_reserve_week
      .at(weekIndex)
      .get('timeSlots') as FormArray;
    control.push(this.fb.control(''));
  }

  removeTimeSlot(weekIndex: number, slotIndex: number) {
    const control = this.can_reserve_week
      .at(weekIndex)
      .get('timeSlots') as FormArray;
    control.removeAt(slotIndex);
  }
}

interface SubCategoryOptions {
  mainCategory: string;
  subCategoryOptions: OptionType[];
}
