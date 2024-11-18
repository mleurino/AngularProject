import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Usuario } from '../../usuarios/modelos';
import { Producto } from '../../productos/modelos';
import { Inscripcion } from '../modelos';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Cargar Inscripcion': emptyProps(),
    
    'Cargar Inscripcion Exito': props<{ data: Inscripcion[] }>(),

    // El servidor responde con un error
    'Cargar Inscripcion Falla': props<{ error: Error }>(),






    'Crear Inscripcion': props<{ productId: string; userId: string }>(),
    'Crear Inscripcion Exito': props<{ data: Inscripcion }>(),
    'Crear Inscripcion Falla': props<{ error: Error }>(),

    'Cargar opciones de producto y usuario ': emptyProps(),
    'Cargar opciones de producto y usuario Exito': props<{
      users: Usuario[];
      products: Producto[];
    }>(),
    'Cargar opciones de producto y usuario Falla': props<{ error: Error }>(),

  }
});
