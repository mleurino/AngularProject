import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcion from './inscripcion.reducer';

export const selectInscripcionState = createFeatureSelector<fromInscripcion.Estado>(
  fromInscripcion.inscripcionFeatureKey
);

export const selectInsc = createSelector(
  selectInscripcionState,
  (state) => state.inscripcion
);

export const selectProductoOpciones = createSelector(
  selectInscripcionState,
  (state) => state.productoOpciones
);

export const selectUsuarioOpciones = createSelector(
  selectInscripcionState,
  (state) => state.usuarioOpciones
);

export const selectCargandoError = createSelector(
  selectInscripcionState,
  (state) => state.cargandoInscripcionError
);

export const selectCargando = createSelector(
  selectInscripcionState,
  (state) => state.cargandoInscripcion
);