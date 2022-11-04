import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private HttpClient:HttpClient) { }

  CreateProductCard(Payload:any){
    return this.HttpClient.post('http://localhost:8888/ProductManagement/ProductData',Payload);
  }
}
