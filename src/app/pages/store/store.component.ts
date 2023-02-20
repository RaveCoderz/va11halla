import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {
  constructor(private cart: CartService) {}

  store = [
    {
      label: 'Федора',
      price: 500,
      img: './assets/images/drinks/fed.png',
    },
    {
      label: 'Абсент',
      price: 500,
      img: './assets/images/drinks/abs.png',
    },
    {
      label: 'Проникновение',
      price: 250,
      img: './assets/images/drinks/badtouch.png',
    },
    { label: 'Пиво', price: 200, img: './assets/images/drinks/beer.png' },
    {
      label: 'Кровосток',
      price: 200,
      img: './assets/images/drinks/bleeding_jane.png',
    },
    {
      label: 'Свечение',
      price: 230,
      img: './assets/images/drinks/bloom_light.png',
    },
    {
      label: 'Голубая фея',
      price: 170,
      img: './assets/images/drinks/blue_fairy.png',
    },
    {
      label: 'Брендини',
      price: 250,
      img: './assets/images/drinks/brandtini.png',
    },
    {
      label: 'Синий бархат',
      price: 280,
      img: './assets/images/drinks/cobalt_velvet.png',
    },
    {
      label: 'Спазм кишок',
      price: 140,
      img: './assets/images/drinks/crevice_spike.png',
    },
    {
      label: 'Огненный моай',
      price: 150,
      img: './assets/images/drinks/flaming_moai.png',
    },
    {
      label: 'Кисельные грёзы',
      price: 170,
      img: './assets/images/drinks/fluffy_dream.png',
    },
    {
      label: 'Бон Развязон',
      price: 260,
      img: './assets/images/drinks/fringe_weaver.png',
    },
    {
      label: 'Пенистая водичка',
      price: 150,
      img: './assets/images/drinks/beer.png',
    },
    {
      label: 'Грязный гризли',
      price: 220,
      img: './assets/images/drinks/grizzly_temple.png',
    },
    {
      label: 'Удар по печени',
      price: 80,
      img: './assets/images/drinks/gut_punch.png',
    },
    {
      label: 'Взрыв на Марсе',
      price: 170,
      img: './assets/images/drinks/marsblast.png',
    },
    {
      label: 'Взрыв на Меркурии',
      price: 250,
      img: './assets/images/drinks/mercuryblast.png',
    },
    {
      label: 'Взрыв на Луне',
      price: 180,
      img: './assets/images/drinks/moonblast.png',
    },
    {
      label: 'Муланский чай',
      price: 500,
      img: './assets/images/drinks/tea.png',
    },
    {
      label: 'Пианист',
      price: 320,
      img: './assets/images/drinks/piano_man.png',
    },
    {
      label: 'Пианистка',
      price: 320,
      img: './assets/images/drinks/piano_woman.png',
    },
    {
      label: 'Пайлдрайвер',
      price: 160,
      img: './assets/images/drinks/piledriver.png',
    },
    { label: 'Ром', price: 500, img: './assets/images/drinks/rum.png' },
    {
      label: 'Бенгальский огонь',
      price: 150,
      img: './assets/images/drinks/sparkle_star.png',
    },
    {
      label: 'Сахарный прилив',
      price: 150,
      img: './assets/images/drinks/sugar_sush.png',
    },
    {
      label: 'Золотое облако',
      price: 150,
      img: './assets/images/drinks/sunshine_cloud.png',
    },
    {
      label: 'Суплекс',
      price: 160,
      img: './assets/images/drinks/suplex.png',
    },
    {
      label: 'Стакан Сансары',
      price: 210,
      img: './assets/images/drinks/zen_star.png',
    },
  ];

  getCartCount() {
    const cartCounts = Object.values(this.cart.getCart());
    let counts = 0;
    cartCounts.forEach((i) => (counts += i.count));
    return counts;
  }

  getCartPrice() {
    const cartCounts = Object.values(this.cart.getCart());
    let price = 0;
    cartCounts.forEach((i) => (price += i.count * i.product.price));
    return price;
  }
}
