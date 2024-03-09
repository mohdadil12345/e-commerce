import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { ProductItemsComponent } from './container/productlist/product-items/product-items.component';
import { TopHeaderComponent } from './top-header/top-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductItemsComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
