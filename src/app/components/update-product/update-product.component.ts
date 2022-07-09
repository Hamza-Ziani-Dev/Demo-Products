import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  editForm = false;
  myproducts : Product ={
    id : "",
    name: "",
    price : "",
    date : "",
  }
  constructor() { }

  ngOnInit(): void {
  }

   // remplir Les Champs des Forms
   remplirChamps(product: any){
    this.myproducts = product,
    this.editForm = true
  }
  updateProduct(){

  }

}
