import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url='http://localhost:3000';
  constructor(private http: HttpClient) { }

  ObtenerRegistros():Observable<ModeloProducto[]> {
    return this.http.get<ModeloProducto[]>(`${this.url}/productos `);
  }
}