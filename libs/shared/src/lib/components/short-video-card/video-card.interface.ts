import { GetTeacherVideoListResponseModelDataInner } from 'libs/openapi/src';

export interface VideoCardData {
  video_id: string;
  name: string;
  category: string;
  intro: string;
  video_type: GetTeacherVideoListResponseModelDataInner.VideoTypeEnum;
  url: string;
  teacher_id: string;
  course_id?: string;
  teacher_name?: string;
  teacher_avatar_url?: string;
}
