import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PolizasService } from '../../../Service/polizas.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { IAseguradoras } from '../../../Interface/iaseguradoras';
import { IClientes } from '../../../Interface/iclientes';
import { AseguradorasService } from '../../../Service/aseguradoras.service';
import { ClientesService } from '../../../Service/clientes.service';


@Component({
  selector: 'app-nuevo-poliza',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-poliza.component.html',
  styleUrl: './nuevo-poliza.component.css'
})
export class NuevoPolizaComponent {
  title = 'Nuevo Poliza';
  id!: number;

  ListaAseguradoras: IAseguradoras[];
  ListaClientes: IClientes[];
  poliza: FormGroup = new FormGroup({
    ID_aseguradora: new FormControl('', Validators.required),
    ID_cliente: new FormControl('', Validators.required),
    Tipo_cobertura: new FormControl('', Validators.required),
    Monto: new FormControl('', Validators.required),
     
  });
  constructor(
    private polizaServicio: PolizasService,
    private rutas: Router,
    private parametros: ActivatedRoute,
    private aseguradoraServicio: AseguradorasService,
    private clienteServicio: ClientesService
  ) {}

  async ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    await this.cargaAseguradora();
    await this.cargaCliente();
    //console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nueva poliza';
    } else {
      this.title = 'Actualizar poliza';
      this.polizaServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.poliza.patchValue({
          ID_aseguradora: res.ID_aseguradora,
          ID_cliente: res.ID_cliente,
          Tipo_cobertura: res.Tipo_cobertura,
          Monto: res.Monto,
        });
      });
    }
  }

  cargaAseguradora(){
    this.aseguradoraServicio.todos().subscribe((res) =>{
      this.ListaAseguradoras= res;
    });
  }

  cargaCliente(){
    this.clienteServicio.todos().subscribe((res) =>{
      this.ListaClientes = res;
    });
  }

  get f() {
    return this.poliza.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Aseguradoras',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.polizaServicio
            .insertar(this.poliza.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Aseguradoras',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/polizas']);
              this.id = 0;
            });
        } else {
          this.polizaServicio
            .actualizar(this.poliza.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Aseguradoras',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/polizas']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'Poliza',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
