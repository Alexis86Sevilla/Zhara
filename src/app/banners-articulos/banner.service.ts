import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from './banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  public obtenerImagenes(): Observable<IBanner[]> {
    const urlEndPoint = "http://localhost:3002/categorias";
    return this.http.get<IBanner[]>(urlEndPoint);
  }
}
