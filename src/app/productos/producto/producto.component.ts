import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../productos.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  productos: Productos[] = [];
  categoria?: string;

  id?: number;

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.obtenerItems();
    this.id = +this.route.snapshot.paramMap.getAll("producto")
  }

  private obtenerItems() {
    this.productosService.obtenerImagenes().subscribe(
      (data) => {
        data.forEach((producto) => {
          const productoAIncluir: Productos = new Productos(producto.id, producto.titulo, producto.img, producto.precio, producto.favorite, producto.oferta, producto.tallas)
          this.productos.push(productoAIncluir);
        })
      },
    )
  }

  /*public irAProducto(id: number): void {
    this.router.navigate(['productos','producto', id])
  }*/


}
