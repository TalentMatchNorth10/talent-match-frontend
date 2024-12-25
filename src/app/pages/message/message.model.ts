import { FormControl } from '@angular/forms';

export enum Tab {
  CHAT = 'chat',
  ANNOUNCEMENT = 'announcement'
}

export enum ChatFormKey {
  MESSAGE = 'message',
  SEARCH = 'search'
}

export interface ChatForm {
  [ChatFormKey.MESSAGE]: FormControl<string | null>;
  [ChatFormKey.SEARCH]: FormControl<string | null>;
}

export enum AnnouncementFormKey {
  TITLE = 'title',
  TEXT = 'text',
  COURSE_IDS = 'courseIds',
  TARGET = 'target'
}

export interface AnnouncementForm {
  [AnnouncementFormKey.TITLE]: FormControl<string | null>;
  [AnnouncementFormKey.TEXT]: FormControl<string | null>;
  [AnnouncementFormKey.COURSE_IDS]: FormControl<string[] | null>;
  [AnnouncementFormKey.TARGET]: FormControl<string | null>;
}
