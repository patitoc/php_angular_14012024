import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProveedoresService } from '../../../Service/proveedores.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-proveedor.component.html',
  styleUrl: './nuevo-proveedor.component.css',
})
export class NuevoProveedorComponent {
  title = '';
  id!: number;

  provedor: FormGroup = new FormGroup({
    Nombres: new FormControl('', Validators.required),
    Telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(17),
      Validators.minLength(7),
    ]),
    Correo: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private proveedorServicio: ProveedoresService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Proveedor';
    } else {
      this.title = 'Actualizar Proveedor';
      this.proveedorServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.provedor.patchValue({
          Nombres: res.Nombres,
          Telefono: res.Telefono,
          Correo: res.Correo,
        });
      });
    }
  }
  get f() {
    return this.provedor.controls;
  }

 grabar() {
    Swal.fire({
      title: 'Proveedores',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.proveedorServicio
            .insertar(this.provedor.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Proveedores',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/proveedores']);
              this.id = 0;
            });
        } /*else {
          this.proveedorServicio
            .actualizar(this.provedor.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Proveedores',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/proveedores']);
              this.id = 0;
            });
        }*/
      } else {
        Swal.fire({
          title: 'Proveedores',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
