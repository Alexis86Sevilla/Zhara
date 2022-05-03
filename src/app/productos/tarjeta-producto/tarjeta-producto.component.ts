import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../productos.model';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() productos?: Productos;
  categoria?: string;


  constructor(
  ) { }

  ngOnInit(): void {

  }

  public calcularDescuento(precio: number, descuento: number): number {

    const precioFinal = precio - (precio * descuento) / 100;

    return precioFinal;
  }
}
