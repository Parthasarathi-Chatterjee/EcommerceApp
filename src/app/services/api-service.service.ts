import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl = "https://fakestoreapi.com/products/";

  constructor(private http : HttpClient) { }

all(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl); 
}
}