import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "./user";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  isValid : boolean = false;

  formGroup: FormGroup = new FormGroup([]);
  constructor(private formBuilder: FormBuilder, private router:Router, private loginService: LoginService) {
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


  get emails() {
    return this.formGroup.get('email');
  }

  get password()
  {
    return this.formGroup.get('password');
  }

  submitForm() {
    if(this.loginService.validate(this.formGroup.get('email')!.value, this.formGroup.get('password')!.value)) {
      this.router.navigate(['/products']);
    }
    this.isValid = true;
  }
}
