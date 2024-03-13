import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProdDetailsComponent } from './containerr/prod-details/prod-details.component';
import { ContainerrComponent } from './containerr/containerr.component';

const routes: Routes = [
  {path : "", component: HomePageComponent},
  {path : "login", component: LoginPageComponent},
  {path : "signup", component: SignupPageComponent},
  {path : "details/:id", component: ProdDetailsComponent},
  {path : "Products", component: ContainerrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
