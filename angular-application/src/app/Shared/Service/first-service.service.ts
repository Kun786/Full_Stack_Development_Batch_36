import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() { }

  UserObject:any =[
    {
      Name:'ali',
      Email:'a@gmail.com',
      Status:1
    },
    {
      Name:'imran',
      Email:'b@gmail.com',
      Status:1
    },
    {
      Name:'john',
      Email:'john@gmail.com',
      Status:0
    }
  ]

  GetUserData(){
    return this.UserObject;
  }

}
