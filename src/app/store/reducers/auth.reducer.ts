import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../../pages/panel/usuarios/modelos'; 
import { AuthActions } from '../acciones/auth/auth.acciones';


export const authFeatureName = 'auth';

export interface AuthState {
  authenticatedUser: Usuario | null;
}

const initialState: AuthState = {
  authenticatedUser: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.setAuthenticatedUser, (estado, accion) => {
    return {
      ...estado,
      authenticatedUser: accion.user,
    };
  }),
  on(AuthActions.unsetAuthenticatedUser, (estado) => {
    return {
      ...estado,
      authenticatedUser: null,
    };
  })
);