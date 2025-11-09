import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface Product {
  id: Number;
  nombre: String;
  descripcion: String;
  precio: Number;
  imagen: String
}

export class Products {

  private products: Product[] = [
    {
      id: 1,
      nombre: 'iphone16',
      descripcion: 'El iPhone 16 Pro tiene un sofisticado diseño de titanio grado 5 con una nueva textura microarenada.',
      precio: 5399,
      imagen: 'images/iphone16.png'
    },

    {
      id: 2,
      nombre: 'Samsung Galaxy S24 Ultra',
      descripcion: 'Perfecta para los amantes del plano detalle. Su zoom óptico te ofrecerá la posibilidad de realizar acercamientos sin que tus capturas pierdan calidad.',
      precio: 3399,
      imagen: 'images/samsungS24.png'
    },

    {
      id: 3,
      nombre: 'Xiaomi 14 Ultra',
      descripcion: 'El Xiaomi 14 Ultra cuenta con un nuevo marco de aluminio unibody 6M42, Cristal Xiaomi Shield y un cuero vegano nanotecnológico Xiaomi de última generación.',
      precio: 5999,
      imagen: 'images/xiaomi14ultra.png',
    },

    {
      id: 4,
      nombre: 'Motorola Razr 50 Ultra',
      descripcion: 'Pasa de la pantalla ultracompacta a la increíble pantalla pOLED de 6.9" de tamaño completo con solo abrir el teléfono.',
      precio: 4299,
      imagen: 'images/motorola50.png',
    },

    {
      id: 5,
      nombre: 'OnePlus 12',
      descripcion: 'El OnePlus 12 es un móvil de alta gama con prestaciones espectaculares, desde su pantalla hasta su rendimiento, cámara y opciones de conectividad.',
      precio: 5499,
      imagen: 'images/oneplus12.png',
    },

    {
      id: 6,
      nombre: 'Realme GT 5 Pro',
      descripcion: 'El Honor Magic 7 Pro redefine la experiencia móvil con una combinación de fotografía avanzada, rendimiento extremo y batería de larga duración.',
      precio: 4399,
      imagen: 'images/honor7pro.png',
    }
  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
