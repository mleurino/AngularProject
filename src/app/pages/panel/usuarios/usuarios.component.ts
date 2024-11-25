import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoUsuariosComponent } from './dialogo-usuarios/dialogo-usuarios.component';

import { ServiciosUsuariosService } from '../../../nucleo/servicios/servicios-usuarios.service';
import { Usuario } from './modelos/index';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacionServicio } from '../../../nucleo/servicios/aut.services';
import { Observable } from 'rxjs';







@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  authUser$ : Observable<Usuario | null>;
  displayedColumns: any[] = ['ID', 'Nombre', 'Email', 'Creado', 'Aprobado', 'Opciones'];
  dataSource: Usuario[]  =[];

  estaCargando=false;

  constructor(private matDialog: MatDialog, private usersService: ServiciosUsuariosService,
    private router: Router, private activatedRoute: ActivatedRoute, private authService: AutenticacionServicio
  ){
    this.authUser$ = this.authService.authUser
  }

  

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


  borrarFila(id: string) {
    if (confirm('Desea eliminar este alumno?')) {
      
      this.estaCargando = true;
      this.usersService.removerUsuario(id).subscribe({
        next: (usuarios) => {
          this.dataSource = usuarios;
        },
        error: (err) => {
          this.estaCargando = false;
        },
        complete: () => {
          this.estaCargando = false;
        },
      });
    }
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
                this.ActualizarUsuario(editandoUsuario.id, resultado);
              } else {
              this.usersService.crearUsuario(resultado).subscribe({next: () => this.cargarUsuarios()})
              }
            
            }
          })
        });
    } 
    

    ActualizarUsuario(id: any, update: Usuario): void {
      this.estaCargando = true;
      this.usersService.actualizarUsuario(id, update).subscribe({
        next: (users) => {
          this.dataSource = users;
        },
        error: (err) => {
          this.estaCargando = false;
        },
        complete: () => {
          this.estaCargando = false;
        },
      });
    }
  
}
