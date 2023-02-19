import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      'name': ['',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      'email': ['',
        [
          Validators.email,
          Validators.required,
        ]
      ],
      'password': ['',
        [
          Validators.required,
          Validators.minLength(9)
        ]
      ],
      'passwordConfirm': ['',
        [
          Validators.required,
          Validators.minLength(9),
        ]
      ],
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get name() {
    return this.formGroup.get('name');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get confirm() {
    return this.formGroup.get('passwordConfirm');
  }
}
