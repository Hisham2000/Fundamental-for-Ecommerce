import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound.component';
// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { AboutComponent } from './about.component';
import {ProductsModule} from "./products/products.module";
import { FooterComponent } from './common/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        AboutComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ProductsModule,
  ],
    providers: [],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
