import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = Object.values(this.cartService.getCart()).filter(
      (e) => e.count > 0
    );
    console.log(this.cart);
  }
}
