import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoUsuariosComponent } from './dialogo-usuarios/dialogo-usuarios.component';

import { ServiciosUsuariosService } from '../../../nucleo/servicios/servicios-usuarios.service';
import { Usuario } from './modelos/index';
import { ActivatedRoute, Router } from '@angular/router';







@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {

  displayedColumns: any[] = ['ID', 'Nombre', 'Email', 'Creado', 'Aprobado', 'Opciones'];
  dataSource: Usuario[]  =[];

  estaCargando=false;

  constructor(private matDialog: MatDialog, private usersService: ServiciosUsuariosService,
    private router: Router, private activatedRoute: ActivatedRoute,
  ){}

  

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  irADetalle(id: string): void {
    this.router.navigate([id, 'detail'], {
      relativeTo: this.activatedRoute,
    });
  }



  cargarUsuarios():void{
    this.estaCargando=true;
    this.usersService.obtenerUsuario().subscribe({
      next: (usuarios) => {
        this.dataSource= usuarios
        
      },
      error:()=>{
        this.estaCargando=false;
      },
      complete:() => {
        this.estaCargando=false;
      }
    })
  }


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
