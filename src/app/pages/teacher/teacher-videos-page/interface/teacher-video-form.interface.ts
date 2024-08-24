import { FormControl } from '@angular/forms';

export interface TeacherVideoForm {
  _id: FormControl<string | null>;
  name: FormControl<string | null>;
  category: FormControl<string | null>;
  intro: FormControl<string | null>;
  url: FormControl<string | null>;
  video_type: FormControl<string | null>;
  course_id: FormControl<string | null>;
  teacher_id: FormControl<string | null>;
}
