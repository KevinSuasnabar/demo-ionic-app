import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  productos: string[] = ['producto1', 'producto2', 'producto3', 'producto4']
  cuadrillas: Producto[];

  constructor(private productoService: ProductoService) {
    this.cuadrillas = [];
  }

  ngOnInit() {
    this.obtenerCuadrillas();
  }

  obtenerCuadrillas() {
    this.productoService.obtenerCuadrillas().subscribe(data => {
      this.cuadrillas = data;
    })
  }

}
