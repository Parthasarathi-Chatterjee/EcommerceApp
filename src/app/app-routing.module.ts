import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductsComponent } from './Component/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
