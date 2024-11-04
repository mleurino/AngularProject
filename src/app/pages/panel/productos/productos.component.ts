import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './modelos';
import { ServicioProductos } from '../../../nucleo/servicios/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
  productos: Observable<Producto[]>

  constructor(private servicioProductos: ServicioProductos){
    this.productos = this.servicioProductos.obtenerProductos();

  }




}
