import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})


export class ProdDetailsComponent implements OnInit   {
  
  api =  "https://e-commerce-backend-crh2.onrender.com/products"

  id : any =  0
  
  constructor(private route : ActivatedRoute , private  http : HttpClient) {}


         details_item : any

        fetchDataByID () {
          return this.http.get(`${this.api}/${this.id}`).subscribe(data => {
           // console.log(data)
           this.details_item = data 
           console.log("details", this.details_item);
          })
       }
       
        ngOnInit() : void{
          this.id = this.route.snapshot.paramMap.get("id");
          this.fetchDataByID();
         }

   
}
