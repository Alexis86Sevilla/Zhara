import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from '../banners-articulos/banner.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  public obtenerImagenes(): Observable<IBanner[]> {
    const urlEndPoint = "http://localhost:3002/conjuntos";
    return this.http.get<IBanner[]>(urlEndPoint);
  }

}
