import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[] = []; //
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // get all products
  getProducts(){
    return this.productService.getAll().subscribe((product) =>{
      this.products = product;
    })
  }

  //Add Product
  addProduct(){

  }


    //Delete Product
    deleteProduct(id: any){
      return this.productService.delete(id).subscribe((product) =>{
        this.products = this.products.filter(product => product.id != id)
      })
    }
}
