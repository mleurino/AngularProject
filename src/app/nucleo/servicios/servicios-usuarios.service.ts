import { Injectable } from '@angular/core';
import { Usuario } from '../../pages/panel/usuarios/modelos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const BASEDATOS_USUARIOS: Usuario[] = [
  {
    id: "1",
    nombre: 'Maximiliano',
    apellido: 'Leurino',
    email: 'mleurino8@gmail.com',
    creadoFecha: new Date,
    Aprobado: true,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ServiciosUsuariosService {

  constructor() { }


  obtenerPorId(id: string): Observable<Usuario | undefined> {
    return this.obtenerUsuario().pipe(map((usuario) => usuario.find((u) => u.id === id)));
  }

  obtenerUsuario (): Observable<Usuario[]>{
    return new Observable((observable) => {
      setInterval(() => {
        observable.next(BASEDATOS_USUARIOS);
        observable.complete();
      }, 1200);
      
    })
  }



}
