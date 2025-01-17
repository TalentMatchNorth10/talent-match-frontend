export interface UserMenuItem {
  label: string;
  icon: string;
}

export interface CartItem {
  courseId: string;
  imgUrl: string;
  name: string;
  price: number;
  quantity: number;
  tags: string[];
}

export interface CartTotal {
  courseCount: number;
  total: number;
}
