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

  handle_delet(id : number) {

    let delfil = this.cartData.filter((ele)=> ele.id !== id)
    this.cartData = delfil
    localStorage.setItem("cart_data", JSON.stringify(delfil))

    alert("Item deleted Successfully")

  }



}
