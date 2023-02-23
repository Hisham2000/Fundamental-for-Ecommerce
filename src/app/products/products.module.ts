import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list.component';
import {MenubarModule} from "primeng/menubar";
import {NavbarComponent} from "../common/navbar.component";
import {FooterComponent} from "../common/footer.component";

@NgModule({
  declarations: [
    ProductListComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MenubarModule,
  ]
})
export class ProductsModule { }
