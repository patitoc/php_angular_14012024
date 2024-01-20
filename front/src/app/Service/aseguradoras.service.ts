import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IAseguradoras} from '../Interface/iaseguradoras';

@Injectable({
  providedIn: 'root'
})
export class AseguradorasService {
  private urlBase:string ='http://localhost/php_angular_Aseguradoras/seguros/Controllers/Aseguradora.Controller.php?op=';
  constructor(private cliente:HttpClient) { }

  todos():Observable<IAseguradoras[]>{
    return this.cliente.get<IAseguradoras[]>(this.urlBase + 'todos');
  }
  uno(id:number):Observable<IAseguradoras>{
    var aseguradoras=new FormData();
    return this.cliente.post<IAseguradoras>(this.urlBase + 'uno', aseguradoras);
  }
  insertar(aseguradoras: IAseguradoras):Observable<any>{
    var asegurad=new FormData();
    asegurad.append('Nombre',aseguradoras.Nombre);
    asegurad.append('Tipo_poliza',aseguradoras.Tipo_poliza);
    asegurad.append('Cobertura',aseguradoras.Cobertura);
  return this.cliente.post(this.urlBase + 'insertar', asegurad);
  }

  actualizar(aseguradoras: IAseguradoras): Observable<any>{
    var asegurad=new FormData();
    asegurad.append('ID_aseguradora', aseguradoras.ID_aseguradora.toString());
    asegurad.append('Nombre', aseguradoras.Nombre);
    asegurad.append('Tipo_poliza', aseguradoras.Tipo_poliza);
    asegurad.append('Cobertura', aseguradoras.Cobertura);
    return this.cliente.post(this.urlBase + 'actualizar', asegurad);
  }

  eliminar(id:number): Observable<any>{
    var prod=new FormData();
    prod.append('ID_aseguradora', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}

