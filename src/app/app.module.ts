import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import es from '@angular/common/locales/es'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ItemsComponent } from './carrusel/items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { BannersArticulosComponent } from './banners-articulos/banners-articulos.component';
import { TarjetasComponent } from './banners-articulos/tarjetas/tarjetas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { TarjetasCategoriasComponent } from './categorias/tarjetas-categorias/tarjetas-categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { TarjetasProductosComponent } from './productos/tarjetas-productos/tarjetas-productos.component';
import { registerLocaleData } from '@angular/common';
import { MapaComponent } from './contacto/mapa/mapa.component';
import { FormularioComponent } from './contacto/formulario/formulario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductoComponent } from './productos/producto/producto.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { TarjetaProductoComponent } from './productos/tarjeta-producto/tarjeta-producto.component';
import { HistoriaComponent } from './nosotros/historia/historia.component';
import { ObjetivosComponent } from './nosotros/objetivos/objetivos.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    ItemsComponent,
    BannersArticulosComponent,
    TarjetasComponent,
    CategoriasComponent,
    TarjetasCategoriasComponent,
    ProductosComponent,
    TarjetasProductosComponent,
    MapaComponent,
    FormularioComponent,
    ProductoComponent,
    ListaProductosComponent,
    TarjetaProductoComponent,
    HistoriaComponent,
    ObjetivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-*'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
