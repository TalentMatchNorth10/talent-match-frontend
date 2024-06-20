import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeacherFormService {
  private fb = inject(FormBuilder);

  constructor() {}

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
      start_year: [''],
      start_month: [''],
      end_year: [''],
      end_month: [''],
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
