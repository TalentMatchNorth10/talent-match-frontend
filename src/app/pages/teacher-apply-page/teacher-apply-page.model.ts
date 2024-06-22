import { FormControl } from '@angular/forms';
import {
  PostTeacherInfoRequestModelCanReserveWeekInner,
  PostTeacherInfoRequestModelLearningExperience,
  PostTeacherInfoRequestModelTeachingCertificateInner,
  PostTeacherInfoRequestModelWorkExperiencesInner
} from 'libs/openapi/src';

export interface TeacherApplyForm {
  user_id: FormControl<string | null>;
  avatar_image: FormControl<string | null>;
  main_categories: FormControl<string[] | null>;
  sub_categories: FormControl<string[] | null>;
  nationality: FormControl<string | null>;
  work_experiences: FormControl<PostTeacherInfoRequestModelWorkExperiencesInner | null>;
  learning_experience: FormControl<PostTeacherInfoRequestModelLearningExperience | null>;
  teaching_certificate: FormControl<
    PostTeacherInfoRequestModelTeachingCertificateInner[] | null
  >;
  intro_video_id: FormControl<string | null>;
  courses: FormControl<string[] | null>;
  can_reserve_week: FormControl<
    PostTeacherInfoRequestModelCanReserveWeekInner[] | null
  >;
}
