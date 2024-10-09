import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoUsuariosComponent } from './dialogo-usuarios/dialogo-usuarios.component';
import { Usuario } from './modelos';




const ELEMENT_DATA: Usuario[] = [
  {
    id: 1,
    nombre: 'Maximiliano',
    apellido: 'Leurino',
    email: 'mleurino8@gmail.com',
    creadoFecha: new Date,
    Aprobado: true,
  }
];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

  displayedColumns: any[] = ['ID', 'Nombre', 'Email', 'Creado', 'Aprobado', 'Opciones'];
  dataSource = ELEMENT_DATA;

  constructor(private matDialog: MatDialog){}

  
    borrarFila(id: number): void {
      console.log(`Borrando usuario con ID: ${id}`);
      this.dataSource = this.dataSource.filter((usuario)=> 
        usuario.id !== id
      )
    }


    abrirModal(editandoUsuario?: Usuario): void{
      this.matDialog.open(DialogoUsuariosComponent, {
        data:{
          editandoUsuario
        }
      })
        .afterClosed()
        .subscribe({
          next: ((resultado) =>{
            if(!!resultado){

              if (editandoUsuario){
                this.dataSource = this.dataSource.map((usuario) =>
                usuario.id === editandoUsuario.id ? {...usuario, ...resultado} : usuario)
              } else {
              this.dataSource = [
                ...this.dataSource,{...resultado}]
              }
            
            }
          })
        });
    } 
  
}
