import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICarrusel } from './carrusel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  constructor(private http: HttpClient) { }

  public obtenerImagenes(): Observable<ICarrusel[]> {
    const urlEndPoint = "http://localhost:3002/carrusel";
    return this.http.get<ICarrusel[]>(urlEndPoint);
  }
}
