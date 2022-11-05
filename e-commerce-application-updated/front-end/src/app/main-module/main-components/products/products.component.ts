import { ProductService } from 'src/app/Shared/Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Url='http://localhost:8888/'
  AllProducts:any = [];
  constructor(private _ProductService:ProductService) { }

  ngOnInit(): void {
    this._ProductService.GetAllProducts().subscribe((ResponseComingFromBackEnd:any) => {
      this.AllProducts = ResponseComingFromBackEnd.Result;
    })
  }

}
