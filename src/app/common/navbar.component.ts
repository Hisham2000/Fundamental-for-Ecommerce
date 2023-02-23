import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    {label: 'Home', icon: 'pi pi-home', routerLink: '/products'},
    {label: 'About', icon: 'pi pi-amazon', routerLink: '/about'}
  ];
}
