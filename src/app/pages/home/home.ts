import { Component } from '@angular/core';
import { Product, ProductsService } from '../../services/products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  productos: Product[] = [];

  constructor(
    private producto: ProductsService,
    private carrito: CartService
  ) {
    this.productos = this.producto.getProducts();
  }

  agregarAlCarrito(producto: Product) {
    this.carrito.addToCart(producto);
  }

}
