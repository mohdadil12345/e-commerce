import { Component, Input } from '@angular/core';
import { ProductTypes } from '../../../models/ProductTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rod-list-items',
  templateUrl: './rod-list-items.component.html',
  styleUrl: './rod-list-items.component.css'
})
export class RodListItemsComponent {

  constructor(private router : Router) {}

  @Input()
  prod: ProductTypes = new ProductTypes(); 




  addtocart() {
    alert("added to cart")

  }



  goto_details(id:number){
    alert("details page")

    this.router.navigate(['Details'], {state : {ProductTypes : this.prod}})
  }


}
