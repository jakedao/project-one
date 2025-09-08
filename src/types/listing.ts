export type ChocolateFlavor = "milk" | "dark" | "mixed";

export interface Product {
  name: string;
  id: string;
  price: number;
  images: string[];
  desc: string;
  flavor?: ChocolateFlavor;
  rating?: number;
}

export type CustomSearchParams = {
  page?: number;
  limit?: number;
  min?: number;
  max?: number;
  total?: number;
  flavor?: string;
  keyword?: string;
};

export type LimitState = {
  expanded: boolean;
  selected: number;
};

export type RangeParams = { min: number; max: number };

export type FilterParams = {
  flavor: ChocolateFlavor[];
  ranges: RangeParams;
};

export type ItemCart = Product & {
  quantity: number;
};

export interface Cart {
  items: {
    [key in string]: ItemCart;
  };
  totalPrice: number;
  completed?: boolean;

  addItem: (item: Product, isBuyNow?: boolean) => void;
  removeItem: (itemId: string) => void;
  proceedOrder: () => void;
  onUpdateQuantity: (itemId: string, isAdd: boolean) => void;
}
