import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ProductosService } from '../../../Service/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.css'
})
export class NuevoProductoComponent {
  title = '';
  id!: number;

  product: FormGroup = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Precio: new FormControl('', Validators.required),
    Cantidad: new FormControl('', Validators.required),
    
  });
  constructor(
    private productosServicio: ProductosService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Producto';
    } else {
      this.title = 'Actualizar Producto';
      this.productosServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.product.patchValue({
          Nombre: res.Nombre,
          Precio: res.Precio,
          Cantidad: res.Cantidad,
        });
      });
    }
  }
  get f() {
    return this.product.controls;
  }

  grabar() {
    Swal.fire({
      title: 'productos',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.productosServicio
            .insertar(this.product.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'productos',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/productos']);
              this.id = 0;
            });
        } else {
          this.productosServicio
            .actualizar(this.product.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'productos',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/productos']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'productos',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
