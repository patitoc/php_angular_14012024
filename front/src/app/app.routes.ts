import { Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './Views/productos/productos.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProveedoresComponent } from './Views/proveedores/proveedores.component';
import { StocksComponent } from './Views/stocks/stocks.component';
import { NuevoProveedorComponent } from './Views/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoProductoComponent } from './Views/productos/nuevo-producto/nuevo-producto.component';
import { NuevoStockComponent } from './Views/stocks/nuevo-stock/nuevo-stock.component';


export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'productos', component: ProductosComponent },

  {
    path: 'proveedores',
    component: ProveedoresComponent,
  },
  {
    path: 'nuevo-proveedor',
    component: NuevoProveedorComponent,
  },
  {
    path: 'nuevo-stock',
    component: NuevoStockComponent,
  },
  {
    path: 'nuevo-producto',
    component: NuevoProductoComponent,
  },
  {
    path: 'editar-proveedor/:id',
    component: NuevoProveedorComponent,
  },
  {
    path: 'editar-stock/:id',
    component: NuevoStockComponent,
  },
  {
    path: 'editar-producto/:id',
    component: NuevoProductoComponent,
  },
  {
    path: 'stocks',
    component: StocksComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
