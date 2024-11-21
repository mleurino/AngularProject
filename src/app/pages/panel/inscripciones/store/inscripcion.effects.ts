import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { InscripcionActions } from './inscripcion.actions';
import { InscripcionService } from '../../../../nucleo/servicios/inscripcion.services';
import { ServiciosUsuariosService } from '../../../../nucleo/servicios/servicios-usuarios.service';
import { ServicioProductos } from '../../../../nucleo/servicios/products.service';
import { Action } from '@ngrx/store';

@Injectable()
export class InscripcionEffects {


  //cargarInscripcions$ = createEffect(() => {
 //   return this.actions$.pipe(

  //    ofType(InscripcionActions.cargarInscripcions),
 //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
 //     concatMap(() => EMPTY as Observable<{ type: string }>)
//    );
//  });
  cargarInsc$: Actions<Action<string>>;
  
  crearInsc$: Actions<Action<string>>;
  crearInscExito$: Actions<Action<string>>;

  cargarProductoUsuario$: Actions<Action<string>>;


  constructor(private actions$: Actions, private inscripcionService: InscripcionService,
    private userService: ServiciosUsuariosService,
    private productsService: ServicioProductos) {
      this.cargarInsc$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(InscripcionActions.cargarInscripcion),
          // delay(5000),
          concatMap(() =>
            this.inscripcionService.obtenerInsc().pipe(
              // Respuesta satisfactoria
              map((response) => InscripcionActions.cargarInscripcionExito({ data: response })),
              // Respuesta erronea
              catchError((error) => of(InscripcionActions.cargarInscripcionFalla({ error })))
            )
          )
        );
      });
      this.crearInsc$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(InscripcionActions.crearInscripcion),
          concatMap((action) =>
            this.inscripcionService
              .crearInscripcion({
                productId: action.productId,
                userId: action.userId,
              
        
              })
              .pipe(
                map((data) => InscripcionActions.crearInscripcionExito({ data })),
                catchError((error) =>
                  of(InscripcionActions.crearInscripcionFalla({ error }))
                )
              )
          )
        );
      });
  
      this.crearInscExito$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(InscripcionActions.crearInscripcionExito),
          map(() => InscripcionActions.cargarInscripcion())
        );
      });
  
      this.cargarProductoUsuario$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(InscripcionActions.cargarOpcionesDeProductoYUsuario),
          concatMap(() =>
            forkJoin([
              this.productsService.obtenerProductos(),
              this.userService.obtenerUsuario(),
            ]).pipe(
              map((res) =>
                InscripcionActions.cargarOpcionesDeProductoYUsuarioExito({
                  products: res[0],
                  users: res[1],
                })
              ),
              catchError((error) =>
                of(InscripcionActions.cargarInscripcionFalla({ error }))
              )
            )
          )
        );
      });
    }
    }

