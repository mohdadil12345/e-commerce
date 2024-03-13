import { Component } from '@angular/core';
import { ProductTypes } from '../models/ProductTypes';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {

   cartData : ProductTypes[] = []

  constructor() {
    const lsdata = JSON.parse(localStorage.getItem("cart_data") || "[]")

     if(lsdata) {
       this.cartData = lsdata
     }

    console.log("cartdata", this.cartData)

  }





  //  const  lsdata = localStorage.getItem("details_data")
   

  //    if(lsdata) {
  //      this.prod_detail = JSON.parse(lsdata)
  //      console.log("details", this.prod_detail)
  //    }else{
  //      alert("no data in local storage")
  //    }


}
