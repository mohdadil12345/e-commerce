import { Component  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})


export class ProdDetailsComponent   {
  
  prod_detail : any;

  id : any =  0
  
  constructor(private route : ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id")

   const  lsdata = localStorage.getItem("details_data")
   

     if(lsdata) {
       this.prod_detail = JSON.parse(lsdata)
       console.log("details", this.prod_detail)
     }else{
       alert("no data in local storage")
     }


       }



     
}
