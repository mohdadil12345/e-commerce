import { Component, Input } from '@angular/core';
import { ProductTypes } from '../../../models/ProductTypes';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {


  @Input()
  prod: ProductTypes = new ProductTypes(); 

}
