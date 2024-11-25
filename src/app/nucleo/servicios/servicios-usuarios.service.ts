import { Injectable } from '@angular/core';
import { Usuario } from '../../pages/panel/usuarios/modelos';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators'
import { generarId } from '../../links-importados/helpers';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


const BASEDATOS_USUARIOS: Usuario[] = [
  {
    id: "1",
    nombre: 'Maximiliano',
    apellido: 'Leurino',
    contraseña: '12345678',
    email: 'mleurino8@gmail.com',
    rol: 'ADMIN',
    creadoFecha: new Date,
    Aprobado: true,
    token: generarId(20) ,
  }
];

@Injectable({
  providedIn: 'root'
})
export class ServiciosUsuariosService {


  private baseURL = environment.apiBaseURL;
  constructor(private httpClient: HttpClient) { }


  obtenerPorId(id: string): Observable<Usuario | undefined> {
    return this.httpClient.get<Usuario>(`${this.baseURL}/usuarios/${id}`);
  }

  
  obtenerUsuario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}/usuarios`);
  }


  crearUsuario(data: Omit<Usuario, 'id'>): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.baseURL}/usuarios`, {
      ...data,
      rol: "USER",
      password: generarId(8),
      token: generarId(20),
      createdAt: new Date().toISOString(),
    });
  }

  removerUsuario(id: string): Observable<Usuario[]> {
    return this.httpClient
      .delete<Usuario>(`${this.baseURL}/usuarios/${id}`)
      .pipe(concatMap(() => this.obtenerUsuario()));

  }


  actualizarUsuario(id: string, update: Partial<Usuario>) {
    return this.httpClient
      .patch<Usuario>(`${this.baseURL}/usuarios/${id}`, update)
      .pipe(concatMap(() => this.obtenerUsuario()));
  }

}
