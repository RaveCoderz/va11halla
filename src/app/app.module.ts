import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { StoreProductComponent } from './pages/store/product/product.component';
import { StoreComponent } from './pages/store/store.component';
import { CartService } from './shared/services/cart.service';
import { FooterComponent } from './components/footer/footer.component';
import { CartProductComponent } from './pages/cart/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CartComponent,
    CartProductComponent,
    StoreProductComponent,
    StoreComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
