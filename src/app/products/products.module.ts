import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list.component';
import {NavbarComponent} from "../common/navbar.component";


@NgModule({
  declarations: [
    ProductListComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
