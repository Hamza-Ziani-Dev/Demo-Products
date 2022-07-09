import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path: 'products', component:ProductsComponent},
  {path: 'update-product', component:UpdateProductComponent},
  {path: 'add-product', component:AddProductComponent},

  {path: "" , redirectTo: "products",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
