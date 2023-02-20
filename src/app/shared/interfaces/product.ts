export interface Product {
  label: string;
  price: number;
  img: string;
}

export interface CartItem {
  product: Product;
  count: number;
}

export interface Cart {
  [key: string]: CartItem;
}
