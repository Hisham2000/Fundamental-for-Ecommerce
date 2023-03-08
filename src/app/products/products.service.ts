import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Products} from "./products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  products: Products[] = [
    {
      "id":1,
      "title": "First",
      "description": "This is the First product",
      "stock": 50,
      "brand": "Apple",
      "category": "Smart Phones",
      "price": 50,
      "discountPercentage": 0,
      "thumbnail": "./assets/images/products/p1.jpg",
      "rating": 1,
      "images": [
        "./assets/images/products/p1.jpg",
        "./assets/images/products/p1.jpg"
      ],
    },
    {
      "id":2,
      "title": "Second",
      "description": "This is the Second product",
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
      "id":3,
      "title": "Third",
      "description": "This is the Third product",
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
      "id":4,
      "title": "Fourth",
      "description": "This is the Fourth product",
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
      "id":5,
      "title": "Fifth",
      "description": "This is the Fifth product",
      "stock": 50,
      "brand": "Apple",
      "category": "Smart Phones",
      "price": 1000,
      "discountPercentage": 0,
      "thumbnail": "./assets/images/products/p1.jpg",
      "rating": 1,
      "images": ["./assets/images/products/p1.jpg"],
    },
  ];
  getProducts()
  {
    // return this.products;
    return this.http.get<any>('https://dummyjson.com/products');
  }

  getSpecificProduct(id: number)
  {
  //   let product: Products = {
  //     brand: "",
  //     category: "",
  //     description: "",
  //     discountPercentage: 0,
  //     id: 0,
  //     images: [],
  //     price: 0,
  //     rating: 0,
  //     stock: 0,
  //     thumbnail: "",
  //     title: ""
  //   };
  //   for(let item of this.products)
  //   {
  //     if(item.id == id)
  //     {
  //       product = item;
  //       return product;
  //     }
  //   }
  //   return product;

    return this.http.get('https://dummyjson.com/products/' + id);
  }

}
