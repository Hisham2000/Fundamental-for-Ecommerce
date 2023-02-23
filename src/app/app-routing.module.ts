import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./notfound.component";
import {AboutComponent} from "./about.component";

const routes: Routes = [
  {'path': '', loadChildren: () => import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  {'path': 'products', loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)},
  {'path': 'about', component: AboutComponent},
  {'path': '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
