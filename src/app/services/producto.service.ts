import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }


  obtenerCuadrillas(): Observable<any> {
    return this.http.get('http://localhost:8080/api/cuadrilla/listar').pipe(
      tap(data => {
        console.log('Listado de cuadrillas tap 1')
      }),
      map((data: any) => data.cuadrillas as Producto[]),
      tap(data => {
        console.log('Listado de cuadrillas tap 2')
      })
    )
  }
}
