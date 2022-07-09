import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get<Product[]>('http://localhost:5000/products');
  }
  // add product
  add(product : any){
      return this.http.post<Product>('http://localhost:5000/products',product)

  }

  // delete product
  delete(id: any){
    return this.http.delete(`http://localhost:5000/products/${id}`);
  }

   // update product
   update(product: Product) {
    return this.http.put(`http://localhost:5000/tasks/${product.id}`,product)
   }

}
