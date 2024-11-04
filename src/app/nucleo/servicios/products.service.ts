import { Injectable } from "@angular/core";
import { generarId } from "../../links-importados/helpers";
import { Producto } from "../../pages/panel/productos/modelos";
import { Observable, of } from "rxjs";

export let CURSE_DATABASE: Producto[] = [
    {
      id: generarId(4),
      nombre: 'Angular',
      precio: 120,
      descripcion: 'Aprende a crear aplicaciones web dinámicas con Angular, uno de los frameworks más populares para el desarrollo front-end. Descubre cómo estructurar proyectos escalables y mejorar la experiencia de usuario con componentes reutilizables y servicios robustos.',
      categoriaid: 'fSDv3d',
    },
    {
      id: generarId(4),
      nombre: 'Next.js',
      precio: 80,
      descripcion: 'Domina Next.js, el poderoso framework de React para aplicaciones de servidor y cliente. Aprenderás a crear aplicaciones web optimizadas para SEO, con renderizado estático y dinámico, y a gestionar rutas y datos de forma eficiente.',
      categoriaid: 'VCSsd3',
    },
    {
        id: generarId(4),
        nombre: 'React Native',
        precio: 100,
        descripcion: 'Desarrolla aplicaciones móviles nativas multiplataforma usando React Native. En este curso, descubrirás cómo crear aplicaciones fluidas para iOS y Android, aprovechando el mismo código base y aprendiendo a integrar funcionalidades móviles avanzadas.',
        categoriaid: 'sthSe8',
      },
      {
        id: generarId(4),
        nombre: 'JavaScript Avanzado',
        precio: 110,
        descripcion: 'Lleva tu conocimiento de JavaScript al siguiente nivel con temas avanzados, como manejo asíncrono, closures, manipulación del DOM y patrones de diseño. Este curso está diseñado para quienes buscan dominar los aspectos más complejos y poderosos del lenguaje.',
        categoriaid: 'Thasd4',
      },
  ];


@Injectable({ providedIn: 'root' })
export class ServicioProductos {



    obtenerProductos(): Observable<Producto[]>{
        return of([...CURSE_DATABASE]);
    }
}