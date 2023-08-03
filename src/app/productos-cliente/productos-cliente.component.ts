import { Component, OnInit } from '@angular/core';
import { productoModel, productoModel2 } from '../shared/producto.model';
import { Observable } from 'rxjs';
import { clienteModel } from '../shared/cliente.models';
import { ProductoService } from '../shared/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-productos-cliente',
  templateUrl: './productos-cliente.component.html',
  styleUrls: ['./productos-cliente.component.css']
})
export class ProductosClienteComponent implements OnInit{
  productos: Observable<productoModel[]> | undefined;
  productos2: Observable<productoModel2[]> | undefined;
  clientes: Observable<clienteModel[]> | undefined;

  nombre: string = '';
  idCliente = '';
  nombre1: string = '';
  cliente = new clienteModel("", "", "","","","");
  
  constructor(
    private productoService: ProductoService,
    private clienteService: ClienteService,
    private route: ActivatedRoute, 
  
    private router: Router){

  }
  
  ngOnInit() {

    this.productos = this.productoService.obtenerProductos();
    this.productos2 = this.productoService.obtenerCompras();
    this.nombre1= this.route.snapshot.params['nombre1'];
    console.log("El id de Cliente es :" + this.nombre1);

    if (this.nombre1) { 
      console.log('ENTRO AL IFFFFF');
      //Editar
      this.clienteService.obtenerCliente(this.nombre1).subscribe(data => {
        this.cliente = data[0];
      }, error => {
        console.log(error);
      });
    }
    else {
      //Nuevo Producto
      console.log('Nuevo Producto');
      
    }
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

}
