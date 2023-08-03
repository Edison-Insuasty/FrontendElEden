import { Component, OnInit } from '@angular/core';
import { productoModel, productoModel2 } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  producto = new productoModel('','','','','');
  compra = new productoModel2('', '', '', '', '','','');
  resultado = 0;
  idProducto = '';
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit() {
    this.idProducto = this.route.snapshot.params['idProducto'];
    this.productoService.obtenerProducto(this.idProducto).subscribe(
      (data) => {
        (this.producto = data[0]),
          (this.compra.nombre_pro = this.producto.nombre),
          (this.compra.cantidad = "1"),
          (this.compra.precio = this.producto.precio);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  comprar() {
    this.productoService.agregarCompra(this.compra).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'HAS REALIZADO TU PEDIDO EXITOSAMENTE',
        text: 'Espera que sea aprovado por un administrador',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/productos_cliente/cliente']).then(() => {
            window.location.reload();
          });
        }
      });
    });
  }

}
