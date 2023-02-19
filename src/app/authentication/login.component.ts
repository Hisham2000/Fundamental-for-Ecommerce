import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "./user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  isValid : boolean = false;

  formGroup: FormGroup = new FormGroup([]);
  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.formGroup = this.formBuilder.group({
      email: ['',
        [Validators.required,
        Validators.email]
      ],
      password: ['',
        [Validators.required,
        Validators.minLength(9)]
      ]
    });
  }



  users: Array<User> = [
    {email: "hishamanwar72@gmail.com", UserName: "HishamAnwar", Password: "123456789"}
  ];
  get emails() {
    return this.formGroup.get('email');
  }

  get password()
  {
    return this.formGroup.get('password');
  }

  submitForm() {

    for(let i=0; i < this.users.length; i++)
    {
      if(this.formGroup.get('email')!.value == this.users[i].email && this.formGroup.get('password')!.value == this.users[i].Password)
      {
        this.router.navigate(['products']);
        break;
      }
    }
    this.isValid = true;
  }
}
