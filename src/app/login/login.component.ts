import { Component } from '@angular/core';
import Swal from 'sweetalert2';


import { productoModel, productoModel2 } from '../shared/producto.model';
import { clienteModel } from '../shared/cliente.models';
import { Observable } from 'rxjs';
import {  ProductoService} from '../shared/producto.service';
import { Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  productos: Observable<productoModel[]> | undefined;
  clientes: Observable<clienteModel[]> | undefined;
  productos2: Observable<productoModel2[]> | undefined;
  cliente = new clienteModel('', '', '', '', '','no');
  constructor(

    private productoService: ProductoService,
    private clienteService: ClienteService,
    private router: Router){

  }
  ngOnInit() {
    
    this.clientes = this.clienteService.obtenerClientes();
    this.productos2 = this.productoService.obtenerCompras();
  }
  onSubmit() {
    this.clienteService.agregarCliente(this.cliente).subscribe((data) => {
      this.router.navigate(['/productos_cliente/cliente/', this.cliente.nombre]);
      Swal.fire({
        icon: 'success',
        title: 'REGISTRO EXITOSO',
        text: 'Ya puedes comprar en nuestra tienda',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/productos_cliente/cliente/', this.cliente.nombre]).then(() => {
            window.location.reload();
          });
        }
      });
    });
  }

}
