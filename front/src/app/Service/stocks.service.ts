import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IStock} from '../Interface/istock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private urlBase:string ='http://localhost/php_angular_14012024/Inventario/Controllers/Stock.Controller.php?op=';
  constructor(private cliente:HttpClient) { }

  todos():Observable<IStock[]>{
    return this.cliente.get<IStock[]>(this.urlBase + 'todos');
  }
  uno(id:number):Observable<IStock>{
    var stock=new FormData();
    return this.cliente.post<IStock>(this.urlBase + 'uno', stock);
  }
  insertar(stock: IStock):Observable<any>{
    var stck=new FormData();
    stck.append('id_producto',stock.ProductoId.toString());
    stck.append('id_proveedor',stock.ProveedorId.toString());
    stck.append('cantidad',stock.Cantidad.toString());
    stck.append('precio', stock.Precio_Venta.toString());

  return this.cliente.post(this.urlBase + 'insertar', stck);
  }

  actualizar(stock: IStock): Observable<any>{
    var stck=new FormData();
    stck.append('id', stock.StockId.toString());
    stck.append('id_producto', stock.ProductoId.toString());
    stck.append('id_proveedor', stock.ProveedorId.toString());
    stck.append('cantidad', stock.Cantidad.toString());
    stck.append('precio', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', stck);
  }

  eliminar(id:number): Observable<any>{
    var stck=new FormData();
    stck.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', stck);
  }
}
