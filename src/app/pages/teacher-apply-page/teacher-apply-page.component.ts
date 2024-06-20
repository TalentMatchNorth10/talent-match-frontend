import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import {
  InputComponent,
  InputType,
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import { TeacherApplyForm } from './teacher-apply-page.model';

@Component({
  selector: 'app-teacher-apply-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    OptionComponent,
    InputComponent
  ],
  templateUrl: './teacher-apply-page.component.html',
  styleUrl: './teacher-apply-page.component.scss'
})
export default class TeacherApplyPageComponent {
  private fb = inject(FormBuilder);

  readonly InputType = InputType;

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

  // displaySelectedOption($event: any) {
  //   console.log($event, this.control.value);
  // }

  createTeacherForm(): FormGroup {
    return this.fb.group({
      user_id: ['', Validators.required],
      avator_image: [''],
      main_categorys: this.fb.array([], Validators.required),
      sub_categorys: this.fb.array([], Validators.required),
      application_status: [null, Validators.required],
      nationality: [''],
      introduction: [''],
      work_experiences: this.fb.array([this.createWorkExperience()]),
      learning_experience: this.createLearningExperience(),
      teaching_certificate: this.fb.array([this.createTeachingCertificate()]),
      intro_video_id: [''],
      courses: this.fb.array([]),
      can_reserve_week: this.fb.array([this.createCanReserveWeek()])
    });
  }

  createWorkExperience(): FormGroup {
    return this.fb.group({
      is_working: [false],
      workplace: [''],
      job_category: [''],
      start_year: [null],
      start_month: [null],
      end_year: [null],
      end_month: [null],
      position: [''],
      place: ['']
    });
  }

  createLearningExperience(): FormGroup {
    return this.fb.group({
      is_in_school: [false],
      degree: [''],
      department: [''],
      start_year: [null],
      start_month: [null],
      end_year: [null],
      end_month: [null],
      name: [''],
      place: [''],
      file: ['']
    });
  }

  createTeachingCertificate(): FormGroup {
    return this.fb.group({
      verifying_institution: [''],
      license_name: [''],
      name: [''],
      license_number: [''],
      file: [''],
      category: [''],
      subject: ['']
    });
  }

  createCanReserveWeek(): FormGroup {
    return this.fb.group({
      day: ['', Validators.required],
      timeSlots: this.fb.array([], Validators.required)
    });
  }
}
