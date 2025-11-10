import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  totalItems = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      // Sumamos la cantidad total de productos
      this.totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
    });
  }
}
