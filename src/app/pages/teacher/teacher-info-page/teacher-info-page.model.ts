export enum GroupType {
  All = 'all',
  Info = 'info',
  Work_experience = 'work_experience',
  Learning_experience = 'learning_experience',
  Teaching_certificate = 'teaching_certificate',
  Video = 'video'
}

export interface Item {
  id: GroupType;
  title: string;
  isEditMode: boolean;
}
