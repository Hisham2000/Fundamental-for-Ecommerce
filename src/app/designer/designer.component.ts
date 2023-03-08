import {Component} from '@angular/core';
import {ShipInfo} from "./ship-info";

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent {
  shapes: Array<ShipInfo> = [

  ];

  tools : Array<ShipInfo> = [
    {tag: 'rect',label: 'rectangle', color: "green", height: 100, width: 200 ,top: 5, left: 5},
    {tag: 'rect', label: 'square', color: "green", height: 100, width: 100, top: 120, left: 5 },
    {tag: 'cirlce', label: 'circle', color: 'red', height: 100, width: 100, top: 220, left:5},
  ]

  lastShape : ShipInfo | undefined;
  lastShapeNum = 0;
  saveTheShape(item: ShipInfo) {
    this.lastShape = item;
  }

  handleDrageOver($event: DragEvent) {
    $event.preventDefault();
  }

  handleDrop($event: DragEvent, drawing: HTMLDivElement) {
    $event.preventDefault();
    if(this.lastShape)
    {
      let startPoint = drawing.getBoundingClientRect();
      let newShape = {...this.lastShape};
      newShape.label = "shape " + ++this.lastShapeNum;
      newShape.left = $event.x - startPoint.x;
      newShape.top = $event.y - startPoint.y;
      this.shapes.push(newShape);
    }
  }

  movingShape : ShipInfo | undefined;
  lastx = 0;
  lasty = 0;
  handleMouseDown($event: MouseEvent, item: ShipInfo) {
    $event.preventDefault();
    this.movingShape = item;
    this.lastx = $event.x;
    this.lasty = $event.y;
  }

  handleMouseUp($event: MouseEvent) {
    this.movingShape = undefined;
    $event.preventDefault();
  }

  handleMouseMove($event: MouseEvent) {
    if(this.movingShape)
    {
      let dx = $event.x - this.lastx;
      let dy = $event.y - this.lasty;
      this.movingShape.left += dx;
      this.movingShape.top += dy;

      this.lastx = $event.x;
      this.lasty = $event.y;
    }
  }
}
