import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { DetaleeProductosComponent } from './detalee-productos/detalee-productos.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SesionComponent } from './sesion/sesion.component';
import { ProductosClienteComponent } from './productos-cliente/productos-cliente.component';
import { CompraComponent } from './compra/compra.component';

const routes: Routes = [
  {path:'productos_admin',component: AdminComponent}, 
  {path:'productos_cliente/cliente',component: ProductosClienteComponent}, 

  { path:'productos',component: ListaProductosComponent}, 
  { path: 'productos/editar/:idProducto', component: EditarProductosComponent },
 

  { path: 'productos_cliente/cliente/detalle/:idProducto', component: DetaleeProductosComponent },
  { path: 'productos/agregar', component: EditarProductosComponent },

  { path: 'productos/login', component: LoginComponent },
  { path: 'productos/sesion', component: SesionComponent },

  { path: 'productos_cliente/cliente/compra/:idProducto', component: CompraComponent },
  
  {path:'**',redirectTo:'/productos',pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
