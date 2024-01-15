import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StocksService } from '../../../Service/stocks.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo-stock',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-stock.component.html',
  styleUrl: './nuevo-stock.component.css'
})
export class NuevoStockComponent {
  title = '';
  id!: number;

  provedor: FormGroup = new FormGroup({
    ProductoId: new FormControl('', Validators.required),
    ProveedorId: new FormControl('', Validators.required),
    Cantidad: new FormControl('', Validators.required),
    Precio_Venta: new FormControl('', Validators.required),
    
  });
  constructor(
    private stocksServicio: StocksService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo stock';
    } else {
      this.title = 'Actualizar stock';
      this.stocksServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.provedor.patchValue({
          ProductoId: res.ProductoId,
          ProveedorId: res.ProveedorId,
          Cantidad: res.Cantidad,
          Precio_Venta: res.Precio_Venta,
        });
      });
    }
  }
  get f() {
    return this.provedor.controls;
  }

  grabar() {
    Swal.fire({
      title: 'stocks',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.stocksServicio
            .insertar(this.provedor.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'stocks',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        } else {
          this.stocksServicio
            .actualizar(this.provedor.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'stocks',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'stocks',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
