import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {AseguradorasComponent} from './aseguradoras/aseguradoras.component';
import {ClientesComponent} from './clientes/clientes.component';
import {PolizasComponent} from './polizas/polizas.component'
//import {TableModule} from '@coreui/angular';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    AseguradorasComponent,
    ClientesComponent,
    PolizasComponent,
   // TableModule,
  ],

})
export class DatosModule {
}
