import {createActionGroup,emptyProps,props,} from '@ngrx/store';
import { Usuario } from '../../../pages/panel/usuarios/modelos';
  
 
  export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
      'Set Authenticated User': props<{ user: Usuario }>(),
      'Unset Authenticated User': emptyProps(),
    },
  });