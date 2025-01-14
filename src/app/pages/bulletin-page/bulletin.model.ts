// 基礎公告介面
export interface BaseAnnouncement {
  id: string;
  title: string;
  text: string;
  createdAt: string;
}

// 系統公告介面
export interface SystemAnnouncement extends BaseAnnouncement {
  type: 'system';
}

// 課程公告介面
export interface CourseAnnouncement extends BaseAnnouncement {
  type: 'course';
  user: {
    id: string;
    name: string;
    avatar: string;
  };
}

export type Announcement = SystemAnnouncement | CourseAnnouncement;

export enum ActiveTab {
  System = 'system',
  Course = 'course'
}
