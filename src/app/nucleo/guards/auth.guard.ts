import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionServicio } from '../servicios/aut.services';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authServicio = inject(AutenticacionServicio)
  const router = inject(Router)


  return authServicio.verificarToken().pipe(map((esValido) => esValido ||  router.createUrlTree([
    'autenticacion', 'login'])
  ));
};
