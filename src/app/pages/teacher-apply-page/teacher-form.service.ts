import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  learningExperienceForm,
  TeacherApplyForm,
  TeacherInfoForm,
  teachingCertificateForm,
  teachingCertificateInfoForm,
  workExperiencesForm,
  workExperiencesInfoForm
} from './teacher-apply-page.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherFormService {
  private fb = inject(FormBuilder);

  constructor() {}

  createTeacherForm(mode: 'apply'): FormGroup<TeacherApplyForm>;
  createTeacherForm(mode: 'info'): FormGroup<TeacherInfoForm>;
  createTeacherForm(mode: 'apply' | 'info'): FormGroup<any> {
    const baseControls = {
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
      learning_experience: this.createLearningExperience()
    };

    baseControls.categories.clear();

    if (mode === 'info') {
      return this.fb.group<TeacherInfoForm>({
        ...baseControls,
        work_experiences: this.fb.array([this.createWorkExperience('info')]),
        teaching_certificates: this.fb.array([
          this.createTeachingCertificate('info')
        ])
      });
    } else {
      return this.fb.group<TeacherApplyForm>({
        ...baseControls,
        work_experiences: this.fb.array([this.createWorkExperience('apply')]),
        teaching_certificates: this.fb.array([
          this.createTeachingCertificate('apply')
        ])
      });
    }
  }

  createWorkExperience(mode: 'apply'): FormGroup<workExperiencesForm>;
  createWorkExperience(mode: 'info'): FormGroup<workExperiencesInfoForm>;
  createWorkExperience(mode: 'apply' | 'info'): FormGroup<any> {
    const baseControls = {
      is_working: this.fb.control(false, [Validators.required]),
      company_name: this.fb.control('', [Validators.required]),
      workplace: this.fb.control('', [Validators.required]),
      job_category: this.fb.control('', [Validators.required]),
      job_title: this.fb.control('', [Validators.required]),
      start_year: this.fb.control(null, [Validators.required]),
      start_month: this.fb.control(null, [Validators.required]),
      end_year: this.fb.control(null, [Validators.required]),
      end_month: this.fb.control(null, [Validators.required])
    };

    if (mode === 'info') {
      return this.fb.group<workExperiencesInfoForm>({
        ...baseControls,
        _id: this.fb.control('')
      });
    }

    return this.fb.group(baseControls) as FormGroup<workExperiencesForm>;
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

  createTeachingCertificate(mode: 'apply'): FormGroup<teachingCertificateForm>;
  createTeachingCertificate(
    mode: 'info'
  ): FormGroup<teachingCertificateInfoForm>;
  createTeachingCertificate(mode: 'apply' | 'info'): FormGroup<any> {
    const baseControls = {
      verifying_institution: this.fb.control('', [Validators.required]),
      license_name: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
      license_number: this.fb.control('', [Validators.required]),
      file: this.fb.control('', [Validators.required]),
      category_id: this.fb.control('', [Validators.required]),
      subject: this.fb.control('', [Validators.required])
    };

    if (mode === 'info') {
      return this.fb.group<teachingCertificateInfoForm>({
        ...baseControls,
        _id: this.fb.control('')
      });
    }

    return this.fb.group<teachingCertificateForm>(baseControls);
  }
}
