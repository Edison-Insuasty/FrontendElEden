import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { productoModel, productoModel2 } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  productos: Observable<productoModel[]> | undefined;
  productos2: Observable<productoModel2[]> | undefined;

  constructor(
    private productoService: ProductoService,
    private router: Router){

  }
  ngOnInit() {
    this.productos = this.productoService.obtenerProductos();
    this.productos2 = this.productoService.obtenerCompras();
  }
  borrarProducto(idProducto: string){
    this.productoService.borrarProducto(idProducto).subscribe(data => {
      console.log("Registro eliminado");  
      this.ngOnInit()
    });
  }
  borrarCompra(idCompra: string){
    this.productoService.borrarCompra(idCompra).subscribe(data => {
      console.log("Pedido eliminado");  
      this.ngOnInit()
    });
  }
  isCurrentPage(route: string): boolean {
    return this.router.url === route;
  }
  aprobar() {
      Swal.fire({
        icon: 'success',
        title: 'COMPRA APROVADA',
        text: 'La compra fue aprovada y sera enviada al cliente',
      })
    
  }
}
