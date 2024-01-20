import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IClientes} from '../Interface/iclientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlBase:string ='http://localhost/php_angular_Aseguradoras/seguros/Controllers/Cliente.Controller.php?op=';
  constructor(private cliente:HttpClient) { }

  todos():Observable<IClientes[]>{
    return this.cliente.get<IClientes[]>(this.urlBase + 'todos');
  }
  uno(id:number):Observable<IClientes>{
    var clientes=new FormData();
    return this.cliente.post<IClientes>(this.urlBase + 'uno', clientes);
  }
  insertar(client: IClientes):Observable<any>{
    var clien=new FormData();
    clien.append('Cedula', client.Cedula);
    clien.append('NombresCliente',client.NombresCliente);
    clien.append('Direccion', client.Direccion);
    clien.append('Telefono',client.Telefono);
    clien.append('Correo',client.Correo);
    clien.append('Contrasenia',client.Contrasenia);
  return this.cliente.post(this.urlBase + 'insertar', clien);
  }

  actualizar(client: IClientes): Observable<any>{
    var clien=new FormData();
    clien.append('ID_cliente', client.ID_cliente.toString());
    clien.append('NombresCliente', client.NombresCliente);
    clien.append('Direccion',client.Direccion);
    clien.append('Telefono', client.Telefono);
    clien.append('Correo', client.Correo);
    clien.append('Contrasenia',client.Contrasenia);
    return this.cliente.post(this.urlBase + 'actualizar', clien);
  }

  eliminar(id:number): Observable<any>{
    var clien=new FormData();
    clien.append('ID_cliente', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', clien);
  }
}
