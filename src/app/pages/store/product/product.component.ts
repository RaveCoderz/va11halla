import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-store-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class StoreProductComponent {
  @Input() product!: Product;
  count = 0;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.initCart(this.product);
    this.count = this.cart.getCart()[this.product.label].count;
  }

  addToCart() {
    this.cart.addToCart(this.product);
    this.count++;
  }
  removeFromCart() {
    this.cart.removeFromCart(this.product);
    this.count > 0 && this.count--;
  }
}
