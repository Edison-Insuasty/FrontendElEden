import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productoModel, productoModel2} from './producto.model';
import { clienteModel } from './cliente.models';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  
  obtenerProductos() { 
    return this.http.get<productoModel[]>(`${this.BASE_URL}/productos`);
  }
  obtenerProducto(idProducto: string) { 
    return this.http.get<productoModel[]>(`${this.BASE_URL}/productos/${idProducto}`);
  }
  agregarProducto(producto: productoModel) {
    return this.http.post<string>(`${this.BASE_URL}/productos`,producto);
  }
  actualizarProducto(producto: productoModel) { 
    return this.http.put<string>(`${this.BASE_URL}/productos/${producto.idProducto}`,producto);
  }
  borrarProducto(idProducto: string) { 
    return this.http.delete<string>(`${this.BASE_URL}/productos/${idProducto}`);
  }
  obtenerCompras(){
    return this.http.get<productoModel2[]>(`${this.BASE_URL}/compras`);
  }
  buscarProducto(nombre: string) {
    const url = `${this.BASE_URL}/buscar`;
    return this.http.post<string>(url, {
      nombre,
    });
  }
  agregarCompra(compra: productoModel2) {
    return this.http.post<string>(`${this.BASE_URL}/compras`,compra);
  }
  borrarCompra(idCompra: string) { 
    return this.http.delete<string>(`${this.BASE_URL}/compras/${idCompra}`);
  }
}

