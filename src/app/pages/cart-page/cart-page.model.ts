export enum Step {
  Step1 = 'ShoppingList',
  Step2 = 'OrderInfo',
  Step3 = 'OrderComplete'
}

export interface StepItem {
  label: string;
  step: Step;
}

export interface CartItem {
  courseId: string;
  imgUrl: string;
  name: string;
  price: number;
  quantity: number;
  tags: string[];
}
