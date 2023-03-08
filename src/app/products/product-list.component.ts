import {Component, OnInit} from '@angular/core';
import {Products} from "./products";
import {ProductsService} from "./products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{
  hasBackdrop: any = true;
  mode: any = "open";
  private _searchProductName : string = '';

  startPriceFrom: number = 0;
  EndPriceIn: number = 0;


  get searchProductName(): string {
    return this._searchProductName;
  }

  set searchProductName(value: string) {
    console.log("we are in teh setter");
    this._searchProductName = value;
    this.filteredProduct = this.filteringProduct(value);
  }


  constructor(private http: ProductsService, protected route: Router) {
    this.http.getProducts().subscribe((response: any)=>{
      this.products = response.products;
      this.filteredProduct = [...this.products];
    }) ;
  }
  products: Products[] = [];


  filteredProduct: Products[] = [];

  filteringProduct(filterValue: string): any
  {
    filterValue = filterValue.toLowerCase();
    return this.products.filter((product: Products) => product.title.toLowerCase().includes(filterValue));
  }




  counter(i: number)
  {
    return new Array(i);
  }

  ngOnInit(){

  }

  seachByPrice() {
    this.filteredProduct.length = 0;
    for (let i =0; i < this.products.length; i++)
    {
      if(this.products[i].price >= this.startPriceFrom && this.products[i].price <= this.EndPriceIn)
      {
        this.filteredProduct.push(this.products[i]);
      }
    }

  }
}
