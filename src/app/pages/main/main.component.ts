import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  jillImages = [
    './assets/images/jill/jill.png',
    './assets/images/jill/jill_sad.png',
    // './assets/images/jill_uh.png',
    // './assets/images/jill_surprise.png',
  ];

  counter = 0;
  currentImage = this.jillImages[this.counter];

  ngOnInit() {
    setInterval(() => {
      if (this.counter < this.jillImages.length - 1) {
        this.counter++;
      } else {
        this.counter = 0;
      }
      this.currentImage = this.jillImages[this.counter];
    }, 500);
  }
}
