import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutingModule } from './designer-routing.module';
import { DesignerComponent } from './designer.component';
import {NavbarModule} from "../common/navbar/navbar.module";
import {SplitterModule} from "primeng/splitter";
import { ShapeComponent } from './shape/shape.component';


@NgModule({
  declarations: [
    DesignerComponent,
    ShapeComponent
  ],
  imports: [
    CommonModule,
    DesignerRoutingModule,
    NavbarModule,
    SplitterModule
  ]
})
export class DesignerModule { }
