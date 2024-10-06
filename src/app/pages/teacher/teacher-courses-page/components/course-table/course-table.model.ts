import { GetTeacherCoursesResponseModelDataInner } from 'libs/openapi/src';
import { ViewMode } from '../../teacher-courses-page.component';

export enum SortColumn {
  Name = 'name',
  Published = 'published'
}

export enum CourseStatus {
  DRAFT = 0,
  PUBLISHED = 1,
  UNPUBLISHED = 2
}

export enum ActionType {
  View = 'view',
  Edit = 'edit',
  Delete = 'delete'
}

export interface Action {
  type: ActionType;
  data: GetTeacherCoursesResponseModelDataInner;
}

export enum PublishedChangeType {
  Published = 'published',
  Unpublished = 'unpublished'
}

export interface PublishedChange {
  type: PublishedChangeType;
  courseId: string;
}

export interface ChangeViewEvent {
  mode: ViewMode;
  courseId?: string;
}
