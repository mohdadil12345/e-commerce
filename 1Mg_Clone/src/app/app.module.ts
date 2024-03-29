import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RodListItemsComponent } from './containerr/product-list/rod-list-items/rod-list-items.component';
import { ProductListComponent } from './containerr/product-list/product-list.component';
import { ContainerrComponent } from './containerr/containerr.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProdDetailsComponent } from './containerr/prod-details/prod-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoaderComponent } from './loader/loader.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';




@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    SignupPageComponent,
    LoginPageComponent,
    ContainerrComponent,
    ProductListComponent,
    RodListItemsComponent,
    CartPageComponent,
    LoaderComponent,
    ProdDetailsComponent,
    HomePageComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    CarouselModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
