import { Injectable } from '@angular/core';



interface user{
  username: string,
  uid: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: user
  constructor() { }

  setUser(user: user){
    console.log(user)
    this.user = user
  }

  getUID(){
    return this.user;
  }
}
