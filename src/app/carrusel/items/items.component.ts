import { Component, OnInit } from '@angular/core';
import { Carrusel } from '../carrusel.model';
import { CarruselService } from '../carrusel.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  imagenes: Carrusel[] = [];
  constructor(
    private itemService: CarruselService
  ) { }

  ngOnInit(): void {
    this.obtenerItems();
  }
  private obtenerItems() {
    this.itemService.obtenerImagenes().subscribe(
      (data) => {
        data.forEach((imagen) => {
          const imagenAIncluir: Carrusel = new Carrusel(imagen.id, imagen.titulo, imagen.subtitulo, imagen.img)
          this.imagenes.push(imagenAIncluir);
        })
      },
    )
  }
}
