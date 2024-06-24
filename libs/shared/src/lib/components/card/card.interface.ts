export interface CardData {
  course_id: string;
  mainImg: string;
  title: string;
  content: string;
  avatar: string;
  name: string;
  price: number;
  quantity?: number;
  main_category: string;
  sub_category: string;
  rate: number;
  ratingCount: number;
}

export interface HoverButton {
  text: string;
  eventType: string;
  color: 'primary' | 'white';
}

export interface HoverButtonClickEvent {
  eventType: string;
  data: CardData;
}
