import {Component, Input} from '@angular/core';
import {ShipInfo} from "../ship-info";

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent {

  @Input()
  shape: ShipInfo | undefined;
}
