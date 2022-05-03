import { Component, OnInit } from '@angular/core';
import { ESTACIONES } from 'src/app/shared/ESTACIONES.enum';
import { TIPODESCUENTO } from 'src/app/shared/TIPODESCUENTO.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  titulo: string = "Zhara";
  descuento: number = TIPODESCUENTO.MEDIO;
  estacion: string = ESTACIONES.PRIMAVERA;

  constructor() { }

  ngOnInit(): void {
  }

}
