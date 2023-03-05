import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./notfound.component";
import {AboutComponent} from "./about.component";
import {CanActivateGuestGuard} from "./guards/can-activate-guest.guard";
import {CanActiveLoginGuard} from "./guards/can-active-login.guard";

const routes: Routes = [
  {'path': '', loadChildren: () => import('./authentication/authentication.module').then(m=>m.AuthenticationModule), canActivate:[CanActiveLoginGuard]},
  {'path': 'user', loadChildren: ()=> import('./profile/profile.module').then(m=>m.ProfileModule), canActivate:[CanActivateGuestGuard]},
  {'path': 'products', loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule), canActivate:[CanActivateGuestGuard]},
  {'path': 'designer', loadChildren: () => import('./designer/designer.module').then(m=>m.DesignerModule)},
  {'path': 'about', component: AboutComponent},
  {'path': '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
