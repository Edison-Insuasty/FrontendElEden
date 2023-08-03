import { Component, OnInit } from '@angular/core';
import { productoModel } from '../shared/producto.model';
import { ProductoService } from '../shared/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalee-productos',
  templateUrl: './detalee-productos.component.html',
  styleUrls: ['./detalee-productos.component.css']
})
export class DetaleeProductosComponent implements OnInit{


  idProducto = '';
  producto = new productoModel("", "", "","","");
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute, 
    private router: Router
    ) { }

    
  ngOnInit() {
    this.idProducto = this.route.snapshot.params['idProducto'];
    console.log("El id de Producto es :" + this.idProducto);
    
    if (this.idProducto) { 
      console.log('ENTRO AL IF');
      this.productoService.obtenerProducto(this.idProducto).subscribe(data => {
        this.producto = data[0];
      }, error => {
        console.log(error);
      });
    }
    else {
      console.log('Nuevo Producto');
    }

  }
}
