import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products';

export interface CartItem extends Product {
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private items: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() {
    // Verifica que estamos en el navegador antes de usar localStorage
    if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.items = JSON.parse(savedCart);
        this.cartSubject.next(this.items);
      }
    }
  }

  private updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.cartSubject.next(this.items);
  }

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.cantidad++;
    } else {
      this.items.push({ ...product, cantidad: 1 });
    }
    this.updateCart();
  }

  removeFromCart(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.updateCart();
  }

  clearCart() {
    this.items = [];
    this.updateCart();
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }
}
