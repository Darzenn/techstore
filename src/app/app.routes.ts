import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CartComponent } from './pages/cart/cart';
import { BuyZone } from './pages/buy-zone/buy-zone';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'carrito', component: CartComponent},
    {path: 'zonaPago', component: BuyZone},
    {path: '**', redirectTo: ''}
];
