import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../../pages/panel/usuarios/modelos';

@Pipe({
  name: 'nombreCompletoUsuario'
})
export class NombreCompletoUsuarioPipe implements PipeTransform {

  transform(value: Usuario, ...args: unknown[]): unknown {
    const nombreCompleto = value.nombre + " " + value.apellido;
    return nombreCompleto.toUpperCase();
  }

}
