import { Component, OnInit } from '@angular/core';
import { Banner } from '../banner.model'
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  imagenes: Banner[] = [];

  constructor(
    private bannerService: BannerService
  ) { }

  ngOnInit(): void {
    this.obtenerItems();
    
  }
  private obtenerItems() {
    this.bannerService.obtenerImagenes().subscribe(
      (data) => {
        data.forEach((imagen) => {
          const imagenAIncluir: Banner = new Banner(imagen.id, imagen.titulo, imagen.img)
          this.imagenes.push(imagenAIncluir);
        })
      },
    )
  }

}
