import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { EditarProductosComponent } from './editar-productos/editar-productos.component';
import { ProductoService } from './shared/producto.service';
import { DetaleeProductosComponent } from './detalee-productos/detalee-productos.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SesionComponent } from './sesion/sesion.component';
import { ProductosClienteComponent } from './productos-cliente/productos-cliente.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    EditarProductosComponent,
    DetaleeProductosComponent,
    AdminComponent,
    LoginComponent,
    SesionComponent,
    ProductosClienteComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
