import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from './productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  public obtenerImagenes(): Observable<IProductos[]> {
    const urlEndPoint = "http://localhost:3002/productos";
    return this.http.get<IProductos[]>(urlEndPoint);
  }

}
