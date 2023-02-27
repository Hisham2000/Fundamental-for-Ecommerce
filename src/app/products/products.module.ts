import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list.component';
import {MenubarModule} from "primeng/menubar";
import {HttpClientModule} from "@angular/common/http";
import {DropdownModule} from "primeng/dropdown";
import { ProductDetailsComponent } from './product-details.component';
import {NavbarModule} from "../common/navbar/navbar.module";
import {FooterModule} from "../common/footer/footer.module";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MenubarModule,
        HttpClientModule,
        DropdownModule,
        NavbarModule,
        FooterModule,
        InputNumberModule,
        FormsModule,
        MatSidenavModule
    ]
})
export class ProductsModule { }
