import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductTypes } from '../../models/ProductTypes';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

 api =  "https://e-commerce-backend-crh2.onrender.com/products"



constructor (private http : HttpClient ) {}


products: any = []; 

ngOnInit(): void {
  this.fetchingdata();
}

fetchingdata () {
   return this.http.get(this.api).subscribe(data => {
    console.log(data)
    this.products = data 
   })
}


}
