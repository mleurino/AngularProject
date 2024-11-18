import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Producto } from '../productos/modelos';
import { Usuario } from '../usuarios/modelos';
import { Inscripcion } from './modelos';
import { InscripcionActions } from './store/inscripcion.actions';
import { selectCargando, selectCargandoError, selectInsc, selectProductoOpciones, selectUsuarioOpciones } from './store/inscripcion.selectors';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit {
  inscripciones$: Observable<Inscripcion[]>;
  userOptions$: Observable<Usuario[]>;
  productoOpciones$: Observable<Producto[]>;
  cargarInscError$: Observable<Error | null>;
  cargandoInsc$: Observable<boolean>;

  inscForm: FormGroup;

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.inscForm = this.formBuilder.group({
      productId: [null, [Validators.required]],
      userId: [null, [Validators.required]],
    });

    this.inscripciones$ = this.store.select(selectInsc);
    this.productoOpciones$ = this.store.select(selectProductoOpciones);
    this.userOptions$ = this.store.select(selectUsuarioOpciones);
    this.cargandoInsc$ = this.store.select(selectCargando);
    this.cargarInscError$ = this.store.select(selectCargandoError);
  }

  ngOnInit(): void {
    this.store.dispatch(InscripcionActions.cargarInscripcion());
    this.store.dispatch(InscripcionActions.cargarOpcionesDeProductoYUsuario());
    // this.store.dispatch(SaleActions.loadProductOptions());
    // this.store.dispatch(SaleActions.loadUserOptions());
  }

  onSubmit(): void {
    if (this.inscForm.invalid) {
      this.inscForm.markAllAsTouched();
    } else {
      this.store.dispatch(InscripcionActions.crearInscripcion(this.inscForm.value));
      this.inscForm.reset();
    }
  }
}

