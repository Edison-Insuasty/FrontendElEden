import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clienteModel } from './cliente.models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  agregarCliente(cliente: clienteModel) {
    return this.http.post<string>(`${this.BASE_URL}/clientes`,cliente);
  }

  validarCliente(nombre: string, clave: string) {
    const url = `${this.BASE_URL}/sesion`;
    return this.http.post<string>(url, {
      nombre,
      clave,
    });
  }

  obtenerCliente(idCliente: string) { 
    return this.http.get<clienteModel[]>(`${this.BASE_URL}/productos_cliente/cliente/${idCliente}`);
  }

  obtenerClientes() { 
    return this.http.get<clienteModel[]>(`${this.BASE_URL}/productos`);
  }
}
