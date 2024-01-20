import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IAseguradoras } from '../../Interface/iaseguradoras';
import Swal from 'sweetalert2';
import { AseguradorasService } from '../../Service/aseguradoras.service';

@Component({
  selector: 'app-aseguradora',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './aseguradoras.component.html',
  styleUrl: './aseguradoras.component.css',
})
export class AseguradorasComponent {
  title='aseguradoras';
  aseguradoras: IAseguradoras[];

  constructor(private aseguradorasServicio:AseguradorasService){
  }

  ngOnInit(){
    this.cargaTabla();
  }

  cargaTabla(){
    this.aseguradorasServicio.todos().subscribe((listaaseguradoras)=>{
      this.aseguradoras = listaaseguradoras;
      console.log(listaaseguradoras);
    });
  }
  alerta() {
    Swal.fire('aseguradoras', 'Mensaje en aseguradoras', 'success');
  }

  eliminar(ID_Aseguradora: number) {
    Swal.fire({
      title: 'aseguradoras',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.aseguradorasServicio.eliminar(ID_Aseguradora).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'aseguradoras',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
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
