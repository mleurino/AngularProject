import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripcion.actions';
import { Inscripcion } from '../modelos/index';
import { Producto } from '../../productos/modelos/index';
import { Usuario } from '../../usuarios/modelos/index';


export const inscripcionFeatureKey = 'inscripcion';

const INSCRIPCIONDB: Inscripcion[] =[
  {
    id: 'asdasdasdsa',
    productId: 'asdafa',
    userId: 'asdafefg'
  }
]

const PRODUCTDB: Producto[] = [
  {
    id: 'fgsgsd',
    nombre: 'Angular',
    precio: 2230,
    descripcion: 'asda',
    categoriaid: 'asfwef'
  },
  {
    id: 'fgsgssd',
    nombre: 'Next',
    precio: 2230,
    descripcion: 'asda',
    categoriaid: 'asfwesf'
  }
]

const USUARIODB: Usuario[]=[
  {
    id: "4d22",
    nombre: "Maximiliano",
    apellido: "Leurino",
    email: "mleurino1234@gmail.com",
    contraseña: "12345678",
    
    token: "asdfghjklñzxcvbnmqwe",
    creadoFecha: new Date( "2024-11-02T12:21:01.719Z"),
    Aprobado: true
  },
  {
    id: "71be",
    nombre: "Homero",
    apellido: "Simpson",
    email: "hsimpson1234@gmail.com",
    contraseña: "123456789",
    token: "mjgjhgfghjhgfghjhgfd",
    creadoFecha: new Date("2024-11-02T12:21:01.719Z"),
    Aprobado: true
  },
  {
    id: "uGRaW",
    nombre: "Bart",
    apellido: "Simpson",
    email: "elbarto@gmail.com",
    contraseña: "123456789",
    token: "x3iQ7JWB8ciVL2vJIR9B",
    creadoFecha: new Date("2024-11-05T02:47:44.058Z"),
    Aprobado: true
  }
]



export interface Estado {
  cargandoInscripcion: boolean;
  cargandoInscripcionError: Error | null;
  inscripcion: Inscripcion[];
  productoOpciones: Producto[];
  usuarioOpciones: Usuario[];
}

export const initialState: Estado = {
  cargandoInscripcion: false,
  cargandoInscripcionError: null,
  inscripcion:[], 
  productoOpciones:[],
  usuarioOpciones:[],

};

export const reducer = createReducer(
  initialState,
  on(InscripcionActions.crearInscripcion, (state) => {
    return{
      ...state,
      cargandoInscripcion: true,
      
    }
  }),
  on(InscripcionActions.cargarInscripcion, (state) => {
    return {
      ...state,
      inscripcion:[...INSCRIPCIONDB],
    };
  }),
  on(InscripcionActions.cargarInscripcionExito, (state, action) => {
    return {
      ...state,
      inscripcion: action.data,
      cargandoInscripcionError: null,
      cargandoInscripcion: false,
    };
  }),
  on(InscripcionActions.cargarInscripcionFalla, (state, action) => {
    return {
      ...state,
      ...initialState,
      cargandoInscripcionError: action.error,
      cargandoInscripcion: false,
    };
  }),

  on(InscripcionActions.cargarOpcionesDeProductoYUsuario, (state) => {
    return {
      ...state,
      productoOpciones:[...PRODUCTDB]
    };
  }),
  on(InscripcionActions.cargarOpcionesDeProductoYUsuario, (state) => {
    return {
      ...state,
      usuarioOpciones:[...USUARIODB]
    };
  }),
  on(InscripcionActions.cargarOpcionesDeProductoYUsuarioExito, (state, action) => {
    return {
      ...state,
      cargandoInscripcionError: null,
      cargandoInscripcion: false,
      productoOpciones: action.products,
      usuarioOpciones: action.users,
    };
  }),
  on(InscripcionActions.cargarOpcionesDeProductoYUsuarioFalla, (state, { error }) => {
    return {
      ...state,
      cargandoInscripcionError: error,
      cargandoInscripcion: false,
    };
  })
);



export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});

