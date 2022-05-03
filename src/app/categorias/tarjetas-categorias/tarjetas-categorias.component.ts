import { Component, OnInit } from '@angular/core';
import { Categorias } from '../categorias.model';
import { CategoriasService } from '../categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas-categorias',
  templateUrl: './tarjetas-categorias.component.html',
  styleUrls: ['./tarjetas-categorias.component.scss']
})
export class TarjetasCategoriasComponent implements OnInit {

  conjuntos: Categorias[] = [];
  
  constructor(
    private tarjetasService: CategoriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerItems();
  }

  private obtenerItems() {
    this.tarjetasService.obtenerImagenes().subscribe(
      (data) => {
        data.forEach((imagen) => {
          const imagenAIncluir: Categorias = new Categorias(imagen.id, imagen.titulo, imagen.img)
          this.conjuntos.push(imagenAIncluir);
        })
      },
    )
  }

  public irACategoria(categoria: String): void {
    this.router.navigate(['productos','lista', categoria])
  }

}
