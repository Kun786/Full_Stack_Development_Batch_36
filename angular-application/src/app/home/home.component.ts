import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../Shared/Service/first-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Data:any = [];
  constructor(private _FirstService:FirstServiceService) { }

  ngOnInit(): void {
    this.GetAllServiceUsers();
  }

  GetAllServiceUsers(){
    this.Data = this._FirstService.GetUserData();
    console.log(this.Data);
  }

}
