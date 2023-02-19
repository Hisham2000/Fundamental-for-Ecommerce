import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";

const routes: Routes = [
  {'path': '', component: LoginComponent},
  {'path': 'register', component: RegisterComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthenticationRoutingModule { }
