import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products : Product[] = [];

  myproducts : Product ={
    id : "",
    name: "",
    price : "",
    date : "",
  }
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
  }

  // add product
  addProduct(){
       this.productService.add(this.myproducts).subscribe( product => {
         this.products = [product, ...this.products]
       }
      )
  }


}
