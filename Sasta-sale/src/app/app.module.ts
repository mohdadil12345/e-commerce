import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RodListItemsComponent } from './containerr/product-list/rod-list-items/rod-list-items.component';
import { ProductListComponent } from './containerr/product-list/product-list.component';
import { ContainerrComponent } from './containerr/containerr.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProdDetailsComponent } from './containerr/prod-details/prod-details.component';



@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    SignupPageComponent,
    LoginPageComponent,
    HomePageComponent,
    ContainerrComponent,
    ProductListComponent,
    RodListItemsComponent,
    ProdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
