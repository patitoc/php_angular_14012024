import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AseguradorasService } from '../../../Service/aseguradoras.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-aseguradora',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-aseguradora.component.html',
  styleUrl: './nuevo-aseguradora.component.css'
})
export class NuevoAseguradoraComponent {
  title = '';
  id!: number;

  asegurad: FormGroup = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Tipo_poliza: new FormControl('', Validators.required),
    Cobertura: new FormControl('', Validators.required),
    
  });
  constructor(
    private aseguradoraServicio: AseguradorasService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nueva Aseguradora';
    } else {
      this.title = 'Actualizar Aseguradora';
      this.aseguradoraServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.asegurad.patchValue({
          Nombre: res.Nombre,
          Tipo_poliza: res.Tipo_poliza,
          Cobertura: res.Cobertura,
        });
      });
    }
  }
  get f() {
    return this.asegurad.controls;
  }

  grabar() {
    Swal.fire({
      title: 'aseguradoras',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.aseguradoraServicio
            .insertar(this.asegurad.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'aseguradoras',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/aseguradoras']);
              this.id = 0;
            });
        } else {
          this.aseguradoraServicio
            .actualizar(this.asegurad.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'aseguradoras',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/aseguradoras']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'aseguradoras',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
