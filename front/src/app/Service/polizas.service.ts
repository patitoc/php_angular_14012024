import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IPolizas} from '../Interface/ipolizas';

@Injectable({
  providedIn: 'root'
})
export class PolizasService {
  private urlBase:string ='http://localhost/php_angular_Aseguradoras/seguros/Controllers/Poliza.Controller.php?op=';
  constructor(private cliente:HttpClient) { }

  todos():Observable<IPolizas[]>{
    return this.cliente.get<IPolizas[]>(this.urlBase + 'todos');
  }
  uno(id:number):Observable<IPolizas>{
    var poliza=new FormData();
    return this.cliente.post<IPolizas>(this.urlBase + 'uno', poliza);
  }
  insertar(polizas: IPolizas):Observable<any>{
    var poliz=new FormData();
    poliz.append('ID_aseguradora',polizas.ID_aseguradora.toString());
    poliz.append('ID_cliente',polizas.ID_cliente.toString());
    poliz.append('Tipo_cobertura',polizas.Tipo_cobertura);
    poliz.append('Monto', polizas.Monto.toString());

  return this.cliente.post(this.urlBase + 'insertar', poliz);
  }

  actualizar(polizas: IPolizas): Observable<any>{
    var poliz=new FormData();
    poliz.append('ID_poliza', polizas.ID_poliza.toString());
    poliz.append('ID_aseguradora', polizas.ID_aseguradora.toString());
    poliz.append('ID_cliente', polizas.ID_cliente.toString());
    poliz.append('Tipo_cobertura', polizas.Tipo_cobertura);
    poliz.append('Monto', polizas.Monto.toString());
    return this.cliente.post(this.urlBase + 'actualizar', poliz);
  }

  eliminar(id:number): Observable<any>{
    var poliz=new FormData();
    poliz.append('ID_poliza', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', poliz);
  }
}
