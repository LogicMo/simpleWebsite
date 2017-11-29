import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  cart= [];
  total= 0;
  i;
  k;

  productList = [
    { "id": "1", "name": "One Plus One", "price": "25000", "url": "https://cdn2.gsmarena.com/vv/bigpic/oneplus-one.jpg" },
    { "id": "2", "name": "One Plus Two", "price": "30000", "url": "https://cdn2.gsmarena.com/vv/bigpic/oneplus-two.jpg" },
    { "id": "3", "name": "One Plus X", "price": "18000", "url": "https://cdn2.gsmarena.com/vv/bigpic/oneplus-x.jpg" },
    { "id": "4", "name": "One Plus Three", "price": "35000", "url": "https://cdn2.gsmarena.com/vv/bigpic/oneplus-3-.jpg" },
    { "id": "5", "name": "One Plus 3T", "price": "36000", "url": "https://cdn2.gsmarena.com/vv/bigpic/oneplus-3t-.jpg" },
    { "id": "6", "name": "One Plus 5", "price": "40000", "url": "https://cdn2.gsmarena.com/vv/bigpic/oneplus-5.jpg" },
    { "id": "7", "name": "One Plus 5T", "price": "45000", "url": "https://cdn2.gsmarena.com/vv/bigpic/oneplus-5t.jpg" }
  ];
  addToCart(items) {

    this.cart.push(items);
    this.total = this.total + parseInt(items.price);
    this.k = this.cart.length;
  }

  resetCart() {

    this.cart.splice(0);
    this.total = 0;
    this.k = 0;
  }


}
