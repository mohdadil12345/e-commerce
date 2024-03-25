import { Component, Input } from '@angular/core';
import { ProductTypes } from '../../../models/ProductTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rod-list-items',
  templateUrl: './rod-list-items.component.html',
  styleUrl: './rod-list-items.component.css'
})
export class RodListItemsComponent {

  constructor(private router : Router) {

  }

  

  @Input()
  prod: ProductTypes = new ProductTypes(); 




  addtocart(prod: any) {
    alert("Products added to cart")
    // console.log(prod)

    let lsdata : any =  JSON.parse(localStorage.getItem("cart_data") || '[]')

    if(lsdata) {
       
      lsdata.push(prod)
      
      localStorage.setItem("cart_data", JSON.stringify(lsdata))

    }else{

      localStorage.setItem("cart_data", JSON.stringify([prod]))
    }

  }



  goto_details(prod: any){
    alert("Welcome to Details Page")

    // console.log("jjj", prod)

  //  localStorage.setItem("details_data", JSON.stringify(prod))


    // this.router.navigate(['Details/:id'], id)
    // this.router.navigate(['details/:id', { id: prod.id }]);
    this.router.navigate(['/details', prod.id]);


       
  }


}
