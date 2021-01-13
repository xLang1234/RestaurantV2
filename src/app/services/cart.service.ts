import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 1, name: 'Schzewan Aloo Burger', price: 8.99, amount: 0 },
    { id: 2, name: 'Schezwan Aloo Meal (R)', price: 5.49, amount: 0 },
    { id: 3, name: 'Grilled Schezwan Chicken Burger', price: 4.99, amount: 0 },
    { id: 4, name: 'Pizza Salami', price: 8.99, amount: 0 },
    { id: 5, name: 'Pizza Classic', price: 5.49, amount: 0 },
    { id: 6, name: 'Sliced Bread', price: 4.99, amount: 0 },
    { id: 7, name: 'Pizza Salami', price: 8.99, amount: 0 },
    { id: 8, name: 'Pizza Classic', price: 5.49, amount: 0 },
    { id: 9, name: 'Sliced Bread', price: 4.99, amount: 0 },
    { id: 10, name: 'Pizza Salami', price: 8.99, amount: 0 },
    { id: 11, name: 'Paneer Makhani Comfort Bowl', price: 5.49, amount: 0 },
    { id: 12, name: 'Red Velvet and Orange Cake', price: 4.99, amount: 0 },
    { id: 13, name: '5 pc Leg Piece Bucket & 2 Dips', price: 8.99, amount: 0 },
    { id: 14, name: 'Big 8', price: 5.49, amount: 0 },
    { id: 15, name: '5 in 1 Classic Zinger Meal', price: 4.99, amount: 0 },
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  constructor() { }

  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }

  emptyCart(){
    this.cart =[];
    this.cartItemCount.next(0);
    console.log(this.cart)
  }
}
