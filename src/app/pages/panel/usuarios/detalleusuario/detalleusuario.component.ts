import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../modelos';
import { ServiciosUsuariosService } from '../../../../nucleo/servicios/servicios-usuarios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.component.html',
  styleUrl: './detalleusuario.component.scss'
})
export class DetalleusuarioComponent implements OnInit, OnDestroy {
  idUsuario?: string;
  dataSource: Usuario[]  =[];
  usuario?: Usuario;
  isLoading = false;
  private usuarioSubscription?: Subscription;


  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: ServiciosUsuariosService
  ) {
    this.idUsuario = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.cargarUsuario();
  }

  private cargarUsuario(): void {
    if (!this.idUsuario) return;
    
    this.isLoading = true;
    this.usuarioSubscription = this.usersService.obtenerPorId(this.idUsuario)
      .subscribe({
        next: (usuario) => {
          this.usuario = usuario;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al cargar el usuario:', error);
          this.isLoading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
  }


 



}
