import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound.component';
import {MenubarModule} from 'primeng/menubar';
import {AboutComponent} from './about.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarModule} from "./common/navbar/navbar.module";
import {FooterModule} from "./common/footer/footer.module";

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
        AboutComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    NavbarModule,
    FooterModule
  ],
    providers: [],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
