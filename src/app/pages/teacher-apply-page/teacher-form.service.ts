import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  learningExperienceForm,
  TeacherApplyForm,
  teachingCertificateForm,
  workExperiencesForm
} from './teacher-apply-page.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherFormService {
  private fb = inject(FormBuilder);

  constructor() {}

  createTeacherForm(): FormGroup {
    const form = this.fb.group<TeacherApplyForm>({
      categories: this.fb.array([
        this.fb.group({
          category_id: this.fb.control('', [Validators.required]),
          sub_categories: this.fb.control<string[] | null>(
            [],
            [Validators.required]
          )
        })
      ]),
      nationality: this.fb.control('', [Validators.required]),
      introduction: this.fb.control(null),
      work_experiences: this.fb.array([this.createWorkExperience()]),
      learning_experience: this.createLearningExperience(),
      teaching_certificates: this.fb.array([this.createTeachingCertificate()])
    });

    form.controls.categories.clear();
    return form;
  }

  createWorkExperience(): FormGroup {
    return this.fb.group<workExperiencesForm>({
      is_working: this.fb.control(false, [Validators.required]),
      company_name: this.fb.control('', [Validators.required]),
      workplace: this.fb.control('', [Validators.required]),
      job_category: this.fb.control('', [Validators.required]),
      job_title: this.fb.control('', [Validators.required]),
      start_year: this.fb.control(null, [Validators.required]),
      start_month: this.fb.control(null, [Validators.required]),
      end_year: this.fb.control(null, [Validators.required]),
      end_month: this.fb.control(null, [Validators.required])
    });
  }

  createLearningExperience(): FormGroup {
    return this.fb.group<learningExperienceForm>({
      is_in_school: this.fb.control(false, [Validators.required]),
      degree: this.fb.control('', [Validators.required]),
      department: this.fb.control('', [Validators.required]),
      start_year: this.fb.control(null, [Validators.required]),
      start_month: this.fb.control(null, [Validators.required]),
      end_year: this.fb.control(null, [Validators.required]),
      end_month: this.fb.control(null, [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      region: this.fb.control(true, [Validators.required]),
      file: this.fb.control('', [Validators.required])
    });
  }

  createTeachingCertificate(): FormGroup {
    return this.fb.group<teachingCertificateForm>({
      verifying_institution: this.fb.control('', [Validators.required]),
      license_name: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      license_number: this.fb.control('', [Validators.required]),
      file: this.fb.control('', [Validators.required]),
      category_id: this.fb.control('', [Validators.required]),
      subject: this.fb.control('', [Validators.required])
    });
  }
}
