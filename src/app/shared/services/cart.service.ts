import { Injectable } from '@angular/core';
import { Cart, Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = {};

  constructor() {}

  initCart(product: Product) {
    this.cart[product.label] = {
      product: product,
      count: 0,
    };
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart[product.label].count += 1;
  }

  removeFromCart(product: Product) {
    if (this.cart[product.label].count > 0) {
      this.cart[product.label].count -= 1;
    }
  }
}
