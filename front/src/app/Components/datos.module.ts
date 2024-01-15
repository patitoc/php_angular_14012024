import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ProductosComponent} from './productos/productos.component';
import {ProveedoresComponent} from './proveedores/proveedores.component';
import {StocksComponent} from './stocks/stocks.component'
import { TableModule } from '@coreui/angular';

@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    ProductosComponent,
    ProveedoresComponent,
    StocksComponent,
    TableModule,
  ],

})
export class DatosModule {
}
