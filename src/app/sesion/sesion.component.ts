import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { productoModel, productoModel2 } from '../shared/producto.model';
import { clienteModel } from '../shared/cliente.models';
import { ProductoService } from '../shared/producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit{

  productos: Observable<productoModel[]> | undefined;
  productos2: Observable<productoModel2[]> | undefined;
  clientes: Observable<clienteModel[]> | undefined;
  cliente = new clienteModel('', '', '', '', '','no');
  // nombre: string = '';


  constructor(
    // private clienteService: ClienteService,
    
    private clienteService: ClienteService,
    private router: Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  nombre_us: string = '';
  clave_us: string = '';

  autenticar() {
      this.clienteService
      .validarCliente(this.nombre_us, this.clave_us)
      .subscribe(
        (response) => {
          if (this.nombre_us == 'EdisonInsuasty') {
            Swal.fire({
              icon: 'success',
              title: 'VAMOS A ADMINISTRACIÓN',
              text: 'Espacio del administrador',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/productos_admin']).then(() => {
                  window.location.reload();
                });
              }
            })
            ;
          } else {
            this.router.navigate(['/productos_cliente/cliente/']);
            Swal.fire({
              icon: 'success',
              title: 'INICIO DE SESIÓN CORRECTAMENTE',
              text: 'Bienvenido!',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/productos_cliente/cliente']).then(() => {
                  window.location.reload();
                });
              }
            });
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Algo salio mal',
            text: 'Error de atenticación!',

          });
        }
      );
  }


}
