import { FormArray, FormControl, FormGroup } from '@angular/forms';
import {
  PatchTeacherInfoCertificateRequestModelInner,
  PatchTeacherInfoWorkRequestModelInner,
  PostTeacherInfoRequestModel,
  PostTeacherInfoRequestModelLearningExperience,
  PostTeacherInfoRequestModelTeachingCertificatesInner,
  PostTeacherInfoRequestModelWorkExperiencesInner
} from 'libs/openapi/src';

type RequiredType<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

type ToFormGroup<T> = {
  [P in keyof RequiredType<T>]: RequiredType<T>[P] extends Array<infer U>
    ? U extends object
      ? FormArray<FormGroup<ToFormGroup<U>>> // 陣列中的元素是物件 -> FormArray<FormGroup<...>>
      : FormControl<U[] | null> // 陣列中的元素是基本型別 -> FormControl<基本型別[] | null>
    : RequiredType<T>[P] extends object
      ? FormGroup<ToFormGroup<RequiredType<T>[P]>> // 物件 -> FormGroup<...>
      : FormControl<RequiredType<T>[P] | null>; // 基本型別 -> FormControl<... | null>
};

// TeacherApply
export type workExperiencesForm =
  ToFormGroup<PostTeacherInfoRequestModelWorkExperiencesInner>;
export type learningExperienceForm =
  ToFormGroup<PostTeacherInfoRequestModelLearningExperience>;
export type teachingCertificateForm =
  ToFormGroup<PostTeacherInfoRequestModelTeachingCertificatesInner>;
export type TeacherApplyForm = ToFormGroup<PostTeacherInfoRequestModel>;
// TeacherInfo
export type workExperiencesInfoForm =
  ToFormGroup<PatchTeacherInfoWorkRequestModelInner>;
export type teachingCertificateInfoForm =
  ToFormGroup<PatchTeacherInfoCertificateRequestModelInner>;

type withOutWorkExperiencesAndTeachingCertificate = Omit<
  TeacherApplyForm,
  'work_experiences' | 'teaching_certificates'
>;

export type TeacherInfoForm = withOutWorkExperiencesAndTeachingCertificate & {
  work_experiences: FormArray<FormGroup<workExperiencesInfoForm>>;
  teaching_certificates: FormArray<FormGroup<teachingCertificateInfoForm>>;
};

export interface TagOption {
  value: string;
  main_category: string;
  sub_category: string[];
}

export type GroupType =
  | 'work_experience'
  | 'learning_experience'
  | 'teaching_certificate';

export interface UploadQueueItem {
  file: File;
  type: 'degree' | 'certificate';
  control: FormControl;
}
