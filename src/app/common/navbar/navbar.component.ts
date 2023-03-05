import {Component, ElementRef, Input} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {LoginService} from "../../authentication/login.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName : string = "";
  constructor(private loginService: LoginService, protected route:Router) {
    this.userName = localStorage.getItem('UserName')!;
  }


  items = [
    {label: 'Home', icon: 'pi pi-home', routerLink: '/products'},
    {label: 'About', icon: 'fa fa-info', routerLink: '/about'},
    {label: 'Flow Chart', icon: 'fa fa-project-diagram', routerLink: '/designer'}
  ];

  logout() {
    this.loginService.logout();
  }
}
