import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../modelos';
import { ServiciosUsuariosService } from '../../../../nucleo/servicios/servicios-usuarios.service';

@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.component.html',
  styleUrl: './detalleusuario.component.scss'
})
export class DetalleusuarioComponent implements OnInit {
  idUsuario?: string;

  usuario?: Usuario;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: ServiciosUsuariosService
  ) {
    this.idUsuario = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.usersService
      .obtenerPorId(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (usuario) => {
          this.usuario = usuario;
          this.isLoading = false;
        },
      });
  }

}
