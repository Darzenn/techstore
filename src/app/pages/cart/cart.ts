import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})

export class CartComponent {
  items: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.items = cart;
      this.total = this.cartService.getTotal();
    });
  }

  eliminar(id: number) {
    this.cartService.removeFromCart(id);
  }

  vaciar() {
    this.cartService.clearCart();
  }
}
