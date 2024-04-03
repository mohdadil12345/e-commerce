import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  email : string =  ""
  password : string = ""

  constructor (private  router : Router, private toast : ToastrService) {
    
  }
  
  
  handle_login() {
    // console.log(this.email, this.password)
    
    let lsdata : any[] = JSON.parse(localStorage.getItem("register_user") || "[]")
    
    if(lsdata) {
      let matchdata = lsdata.find((ele) => ele.email == this.email && ele.password == this.password)

            if(matchdata){
              this.toast.success("Login successfull")
              this.router.navigate([""])
            }else{
              this.toast.error("wrong credential")

            }

    }


  }

}
