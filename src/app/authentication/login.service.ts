import { Injectable } from '@angular/core';
import {User} from "./user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users : Array<User> = [
    {email: "hishamanwar72@gmail.com", UserName: "HishamAnwar", Password: "123456789"}
  ];
  constructor(private route:Router) { }

  validate(email: string, password: string)
  {
    for(let i=0; i < this.users.length; i++)
    {
      if(email == this.users[i].email && password == this.users[i].Password)
      {
        localStorage.setItem("UserName", this.users[i].UserName);
        localStorage.setItem("Password", this.users[i].Password);
        localStorage.setItem("email", this.users[i].email);
        return true;
      }
    }
    return  false;
  }

  logout()
  {
    localStorage.clear();
    this.route.navigate(['']);
  }
}
