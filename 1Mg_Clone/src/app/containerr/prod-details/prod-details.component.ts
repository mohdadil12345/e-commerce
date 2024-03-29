import { HttpClient } from '@angular/common/http';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})


export class ProdDetailsComponent implements OnInit   {
  
  api =  "https://fivemg-backend.onrender.com/products"

  id : any =  0
  loading : boolean =  true
  
  constructor(private route : ActivatedRoute , private  http : HttpClient) {}


         details_item : any

        fetchDataByID () {
          return this.http.get(`${this.api}/${this.id}`).subscribe(data => {
           // console.log(data)
           this.details_item = data 
           console.log("details", this.details_item);
           this.loading  = false
          })
       }
       
        ngOnInit() : void{
          this.id = this.route.snapshot.paramMap.get("id");
          this.fetchDataByID();
         }

   
}
