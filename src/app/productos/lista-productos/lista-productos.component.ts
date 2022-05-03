import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos.model';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  productos: Productos[] = [];
  categoria?: string;
  

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerItems();
    this.categoria = this.route.snapshot.paramMap.get("categoria") ?? undefined
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

  public irAProducto(id: number): void {
    this.router.navigate(['productos','producto', id])
  }

  
}