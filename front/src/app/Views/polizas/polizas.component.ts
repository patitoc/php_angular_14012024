import { Component } from '@angular/core';
import { IPolizas } from '../../Interface/ipolizas';
import { PolizasService } from '../../Service/polizas.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-poliza',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './polizas.component.html',
  styleUrl: './polizas.component.css',
})
export class PolizasComponent {
  title = 'Polizas';
  poliz: IPolizas[];

  constructor(private polizasServicio: PolizasService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.polizasServicio.todos().subscribe((listaspolizas) => {
      this.poliz = listaspolizas;
      console.log(listaspolizas);
    });
  }
  alerta() {
    Swal.fire('Polizas', 'Mensaje en polizas', 'success');
  }

  eliminar(ID_poliza: number) {
    Swal.fire({
      title: 'Poliza',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.polizasServicio.eliminar(ID_poliza).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Poliza',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
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
