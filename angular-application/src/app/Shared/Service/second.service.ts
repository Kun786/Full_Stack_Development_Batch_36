import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SecondService {
//  NewUserData = UserData;

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

  constructor() { }

  ProvideUserData(){
    return this.UserObject;
    // return Http2ServerRequest.post(apiurl,Payload)
  }

 
}
