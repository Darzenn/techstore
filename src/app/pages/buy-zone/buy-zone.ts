import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buy-zone',
  imports: [CommonModule, FormsModule],
  templateUrl: './buy-zone.html',
  styleUrl: './buy-zone.css',
})

export class BuyZone {
  items: CartItem[] = [];
  total = 0;
  pedidoConfirmado = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // Obtenemos los productos actuales del carrito
    this.cartService.cart$.subscribe(cart => {
      this.items = cart;
      this.total = this.cartService.getTotal();
    });
  }

  confirmarPedido() {
    this.pedidoConfirmado = true;
    this.cartService.clearCart(); // vacía el carrito después de confirmar

    // Simulamos una "espera de procesamiento"
    setTimeout(() => {
      this.pedidoConfirmado = false;
      alert('✅ ¡Tu pedido fue confirmado con éxito!');
    }, 2000);
  }
}
