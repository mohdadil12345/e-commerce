import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  api =  "https://e-commerce-backend-crh2.onrender.com/products"



  constructor (private http : HttpClient , private router : Router ) {}
  
  
  products: any = []; 
  
  ngOnInit(): void {
    this.fetchingdata();
  }
  
  fetchingdata () {
     return this.http.get(this.api).subscribe(data => {
      // console.log(data)
      this.products = data 
     })
  }
  
  

  
}
