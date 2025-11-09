import { Component } from '@angular/core';
import { Product, Products } from '../../services/products';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productos: Product[] = [];
  constructor(private producto: Products) {

  }

}
