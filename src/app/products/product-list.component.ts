import {Component, OnInit} from '@angular/core';
import {Products} from "./products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  products: Products[] = [
    {
      "id":1,
      "title": "First",
      "description": "This is the product",
      "stock": 50,
      "brand": "Apple",
      "category": "Smart Phones",
      "price": 50,
      "discountPercentage": 0,
      "thumbnail": "./assets/images/products/p1.jpg",
      "rating": 1,
      "images": ["./assets/images/products/p1.jpg"],
    },
    {
      "id":1,
      "title": "First",
      "description": "This is the product",
      "stock": 50,
      "brand": "Apple",
      "category": "Smart Phones",
      "price": 50,
      "discountPercentage": 0,
      "thumbnail": "./assets/images/products/p1.jpg",
      "rating": 1,
      "images": ["./assets/images/products/p1.jpg"],
    },
    {
      "id":1,
      "title": "First",
      "description": "This is the product",
      "stock": 50,
      "brand": "Apple",
      "category": "Smart Phones",
      "price": 50,
      "discountPercentage": 0,
      "thumbnail": "./assets/images/products/p1.jpg",
      "rating": 1,
      "images": ["./assets/images/products/p1.jpg"],
    },
    {
      "id":1,
      "title": "First",
      "description": "This is the product",
      "stock": 50,
      "brand": "Apple",
      "category": "Smart Phones",
      "price": 50,
      "discountPercentage": 0,
      "thumbnail": "./assets/images/products/p1.jpg",
      "rating": 1,
      "images": ["./assets/images/products/p1.jpg"],
    },
    {
      "id":1,
      "title": "First",
      "description": "This is the product",
      "stock": 50,
      "brand": "Apple",
      "category": "Smart Phones",
      "price": 50,
      "discountPercentage": 0,
      "thumbnail": "./assets/images/products/p1.jpg",
      "rating": 1,
      "images": ["./assets/images/products/p1.jpg"],
    },
  ];
  errorMessage: string | undefined;


  imageStatus: boolean = false;
  showImage: boolean = true;

  filteredProduct: Products[] = [];
  private _filterInput: string = "";

  get filterInput()
  {
    return this._filterInput;
  }

  set filterInput(value: string)
  {
    this._filterInput = value;
    this.filteredProduct = this.filteringProduct(value);
    console.log("in setter ",value);
  }

  filteringProduct(filterValue: string): any
  {
    filterValue = filterValue.toLowerCase();
    return this.products.filter((product: Products) => product.title.toLowerCase().includes(filterValue));
  }



  toggleImage(): void{
    this.showImage = !this.showImage;
  }


  counter(i: number)
  {
    return new Array(i);
  }

  ngOnInit(){
    this.filterInput = "";
  }


}
