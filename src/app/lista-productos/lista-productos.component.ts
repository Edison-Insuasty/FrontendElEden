import { Component, OnInit } from '@angular/core';
import { productoModel, productoModel2 } from '../shared/producto.model';
import { clienteModel } from '../shared/cliente.models';
import { Observable } from 'rxjs';
import {  ProductoService} from '../shared/producto.service';
import { ClienteService } from '../shared/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{
  productos: Observable<productoModel[]> | undefined;
  productos2: Observable<productoModel2[]> | undefined;
  cliente = new clienteModel('', '', '', '', '','no');
  nombre: string = '';
  correo_us: string = '';
  clave_us: string = '';


  constructor(
  
    private productoService: ProductoService,
    private route: ActivatedRoute, 
    private router: Router

    ){

  }
  ngOnInit() {
    
    this.productos = this.productoService.obtenerProductos();
    this.productos2 = this.productoService.obtenerCompras();
  }

  buscarProducto() {
    this.productoService.buscarProducto(this.nombre).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'EN EXISTENCIA',
          text: 'El producto que buscas si esta disponible',
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'SIN EXISTENCIA',
          text: 'El producto que buscas no esta disponible!',
        });
      }
    );
  }
 
  verificarsesion() {
    Swal.fire({
      title: '¡NO ESTAS REGISTRADO!',
      text: 'No puedes realizar compras',
      icon: 'warning',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: 'REGISTRARME',
      cancelButtonText: 'INICIAR SESIÓN',
      denyButtonText: `CANCERLAR`,
     
  }) .then((result) => {
      if (result.isConfirmed) {
          Swal.fire('¡Hecho!', 'Vamos a registrarnos', 'success');
          this.router.navigate(['/productos/login']);
      } else if (result.isDenied){
        
          this.router.navigate(['/productos']);
      }
      else{
        Swal.fire('¡Hecho!', 'Vamos a iniciar sesión.', 'success');
        this.router.navigate(['/productos/sesion']);
    }
  });
    
  }
}


