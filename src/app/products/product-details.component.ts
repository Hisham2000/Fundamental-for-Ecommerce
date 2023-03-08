import {Component, OnInit} from '@angular/core';
import {ActivePerfRecorder} from "@angular/compiler-cli/src/ngtsc/perf";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "./products.service";
import {Products} from "./products";
import {InputNumberModule} from 'primeng/inputnumber';
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  productId = this.route.snapshot.paramMap.get("id")!;
  product: any ;
  val: any = 1;

  constructor(private route: ActivatedRoute, private http: ProductsService) {
    this.http.getSpecificProduct(Number(this.productId)).subscribe((response: any)=>{
      this.product = response;
    })
  }
  ngOnInit(): void {
  }

  counter(i: number)
  {
    return new Array(Math.round(i));
  }
}
