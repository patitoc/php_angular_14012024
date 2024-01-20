import { Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AseguradorasComponent } from './Views/aseguradoras/aseguradoras.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ClientesComponent } from './Views/clientes/clientes.component';
import { PolizasComponent } from './Views/polizas/polizas.component';
import { NuevoClienteComponent } from './Views/clientes/nuevo-cliente/nuevo-cliente.component';
import { NuevoAseguradoraComponent } from './Views/aseguradoras/nuevo-aseguradora/nuevo-aseguradora.component';
import { NuevoPolizaComponent } from './Views/polizas/nuevo-poliza/nuevo-poliza.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { 
    path: 'aseguradoras', 
    component: AseguradorasComponent 
  },
  {
    path: 'nuevo-aseguradora',
    component: NuevoAseguradoraComponent,
  },
    
  {
    path: 'editar-aseguradora/:id',
    component: NuevoAseguradoraComponent,
  },

  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'nuevo-cliente',
    component: NuevoClienteComponent,
  },
  {
    path: 'editar-cliente/:id',
    component: NuevoClienteComponent,
  },
  {
    path: 'polizas',
    component: PolizasComponent,
  },
  {
    path: 'nuevo-poliza',
    component: NuevoPolizaComponent,
  },
  {
    path: 'editar-poliza/:id',
    component: NuevoPolizaComponent,
  },
 
 
 
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
