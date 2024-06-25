export interface CardData {
  course_id: string;
  main_image: string;
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
  min_price?: PriceQuantity;
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

export interface PriceQuantity {
  price: number;
  quantity: number;
}
