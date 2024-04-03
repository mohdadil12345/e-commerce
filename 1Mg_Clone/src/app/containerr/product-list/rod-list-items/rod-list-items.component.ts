import { Component, Input } from '@angular/core';
import { ProductTypes } from '../../../models/ProductTypes';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rod-list-items',
  templateUrl: './rod-list-items.component.html',
  styleUrl: './rod-list-items.component.css'
})
export class RodListItemsComponent {

  constructor(private router : Router, private toast : ToastrService) {

  }

  

  @Input()
  prod: ProductTypes = new ProductTypes(); 




  addtocart(prod: any) {
  
    this.toast.success("Products added to cart")

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
    this.toast.success("Welcome to Details Page")
    this.router.navigate(['/details', prod.id]);


       
  }


}
