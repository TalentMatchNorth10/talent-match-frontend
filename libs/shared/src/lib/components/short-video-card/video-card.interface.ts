export interface VideoCardData{
  video_id: string;
  name: string;
  category: string;
  intro: string;
  video_type: 'storage'|'youtube';
  url: string;
}