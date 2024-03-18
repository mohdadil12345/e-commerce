import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  email : string =  ""
  password : string = ""

  constructor (private  router : Router) {
    
  }
  
  
  handle_login() {
    // console.log(this.email, this.password)
    
    let lsdata : any[] = JSON.parse(localStorage.getItem("register_user") || "[]")
    
    if(lsdata) {
      let matchdata = lsdata.find((ele) => ele.email == this.email && ele.password == this.password)

            if(matchdata){
              alert("login successfull")
              this.router.navigate([""])
            }else{
              alert("wrong credential")
            }

    }


  }

}
