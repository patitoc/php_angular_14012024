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
    stck.append('ProductoId',stock.ProductoId.toString());
    stck.append('ProveedorId',stock.ProveedorId.toString());
    stck.append('Cantidad',stock.Cantidad.toString());
    stck.append('Precio_Venta', stock.Precio_Venta.toString());

  return this.cliente.post(this.urlBase + 'insertar', stck);
  }

  actualizar(stock: IStock): Observable<any>{
    var stck=new FormData();
    stck.append('StockId', stock.StockId.toString());
    stck.append('ProductoId', stock.ProductoId.toString());
    stck.append('ProveedorId', stock.ProveedorId.toString());
    stck.append('Cantidad', stock.Cantidad.toString());
    stck.append('Precio_Venta', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', stck);
  }

  eliminar(id:number): Observable<any>{
    var stck=new FormData();
    stck.append('StockId', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', stck);
  }
}
