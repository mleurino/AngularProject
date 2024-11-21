import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Inscripcion } from '../../pages/panel/inscripciones/modelos';

@Injectable({ providedIn: 'root' })
export class InscripcionService {
  constructor(private httpClient: HttpClient) {}

  obtenerInsc(): Observable<Inscripcion[]> {
    return this.httpClient.get<Inscripcion[]>(
      `${environment.apiBaseURL}/inscripciones?_embed=usuarios&_embed=productos`
      
    );
  }

  crearInscripcion(payload: Omit<Inscripcion, 'id' |  'product'>): Observable<Inscripcion> {
    return this.httpClient.post<Inscripcion>(
      `${environment.apiBaseURL}/inscripciones`,
      payload
    );
  }
}  