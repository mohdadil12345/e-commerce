import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  loading = true;

  api = 'https://fivemg-backend.onrender.com/products';

  constructor(private http: HttpClient, router: Router) {}

  products: any = [];
  globalData: any = [];
  categ : string = ""

  ngOnInit(): void {
    this.fetchingdata();
  }

  fetchingdata() {
    return this.http.get(this.api).subscribe((data) => {
      // console.log(data)
      this.products = data;
      this.globalData = data
      this.loading = false;
    });
  }

  serchfilter: string = '';

  handle_filter() {
    this.products = this.globalData.filter((ele: any) =>
      ele.title.toLowerCase().includes(this.serchfilter.toLowerCase())
    );

  }



  filterByCategory() {
   if(this.categ == "") {
    this.products  = this.globalData
   }else{
    this.products = this.globalData.filter((ele:any) => 
         ele.category.includes(this.categ)
      )
    
   }
  }





}
