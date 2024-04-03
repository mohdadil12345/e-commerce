import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  constructor (private router : Router,  private toastr: ToastrService) {}

  username : string  = "";
  email : string = "";
  password : string = ""

  handle_signup() {
    // console.log(this.username, this.email, this.password)

  let user = {
    username :this.username,
    email :this.email,
    password :this.password,
  }

  if (this.username && this.email && this.password) {
    this.toastr.success("Registration Successfull")
    console.log(user)



let lsdata : any[] = JSON.parse(localStorage.getItem("register_user") || "[]")

if(lsdata) {
  lsdata.push(user)
  localStorage.setItem("register_user", JSON.stringify(lsdata))

}else{
  localStorage.setItem("register_user", JSON.stringify([user]))
}



    this.username = ""
    this.email = ""
    this.password = ""


    this.router.navigate(['login'])



  } else {
    this.toastr.success("Form not valid")

  }



  }
}
