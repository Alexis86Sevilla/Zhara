import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Productos } from '../productos.model';
import { ProductosService } from '../productos.service';
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas-productos',
  templateUrl: './tarjetas-productos.component.html',
  styleUrls: ['./tarjetas-productos.component.scss']
})
export class TarjetasProductosComponent implements OnInit {
  @Input() producto?: Productos;
  @Output() click: EventEmitter<number> = new EventEmitter<number>()
  favorito = faFaceGrinHearts;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public calcularDescuento(precio: number, descuento: number): number {

    const precioFinal = precio - (precio * descuento) / 100;

    return precioFinal;
  }

  public irAProducto(producto: number): void {
    this.router.navigate(['productos', 'producto', producto])
  }

  public enviarID(): void {
    this.click.emit(this.producto?.getId())
  }

}
