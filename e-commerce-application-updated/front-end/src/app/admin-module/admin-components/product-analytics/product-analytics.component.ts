import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-product-analytics',
  templateUrl: './product-analytics.component.html',
  styleUrls: ['./product-analytics.component.css']
})
export class ProductAnalyticsComponent implements OnInit {
  Url='http://localhost:8888/';

  particularProduct:any = {};
  // dummyArray = [1,2,3,4,5]
  productArray:any = [];
  constructor(private _ProductService:ProductService) { }

  ngOnInit(): void {
    this.PopulateProductArray();
  }

  PopulateProductArray(){
    this._ProductService.GetAllProducts().subscribe((res:any) => {
      this.productArray = res.Result;
    })
  }

  getProductById(Id:any){
    this._ProductService.GetProductById(Id).subscribe((res:any) => {
      console.log(res);
      this.particularProduct = res.Result;
    })
  }
}
