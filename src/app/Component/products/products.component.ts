import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

productList : any
constructor(private apiService: ApiServiceService){

}

  ngOnInit(): void {
  this.apiService.all().subscribe((products : Product[])=>{
    this.productList=products;

      console.log(this.productList)
      console.log(products[0])
  });
  }

}
