import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../Shared/Service/first-service.service';
import { SecondService } from '../Shared/Service/second.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Data:any = [];
  NewData:any = [];
  Name = "kjahkhas";
  constructor(
    private MyService:SecondService
    ) { }

  ngOnInit(): void {
    this.GetAllUsers();
  }

  GetAllUsers(){
    this.Data = this.MyService.ProvideUserData();
    console.log(this.Data);
  }

  

}
