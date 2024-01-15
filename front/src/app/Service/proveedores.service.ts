import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IProveedor} from '../Interface/iproveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private urlBase:string ='http://localhost/php_angular_14012024/Inventario/Controllers/Proveedor.Controller.php?op=';
  constructor(private cliente:HttpClient) { }

  todos():Observable<IProveedor[]>{
    return this.cliente.get<IProveedor[]>(this.urlBase + 'todos');
  }
  uno(id:number):Observable<IProveedor>{
    var proveedor=new FormData();
    return this.cliente.post<IProveedor>(this.urlBase + 'uno', proveedor);
  }
  insertar(proveedor: IProveedor):Observable<any>{
    var prov=new FormData();
    prov.append('Nombres',proveedor.Nombres);
    prov.append('Telefono',proveedor.Telefono.toString());
    prov.append('Correo',proveedor.Correo.toString());
  return this.cliente.post(this.urlBase + 'insertar', prov);
  }

  actualizar(proveedor: IProveedor): Observable<any>{
    var prov=new FormData();
    prov.append('ProveedorId', proveedor.ProveedorId.toString());
    prov.append('Nombres', proveedor.Nombres);
    prov.append('Telefono', proveedor.Telefono.toString());
    prov.append('Correo', proveedor.Correo.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prov);
  }

  eliminar(id:number): Observable<any>{
    var prov=new FormData();
    prov.append('ProveedorId', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prov);
  }
}
