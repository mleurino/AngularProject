import{a as c,y as T}from"./chunk-7QRKQRV6.js";import{a as O,b as A,c as N,d as D,e as _,f as F}from"./chunk-LURUJP6O.js";import"./chunk-YCQZQQQU.js";import{J as R}from"./chunk-SOHMW4PZ.js";import{l as b}from"./chunk-JGKZYM5P.js";import"./chunk-5IC5DNT2.js";import{Gc as I,Hc as j,Jc as w,Lc as E,Pb as a,Qb as M,Rb as v,Ta as n,Ua as C,X as y,Y as s,Zb as S,_b as h,fa as P,ga as d,ib as u,m as x,nb as f,ub as r,vb as i}from"./chunk-KLRYANPK.js";var B=[{id:c(4),nombre:"Angular",precio:120,descripcion:"Aprende a crear aplicaciones web din\xE1micas con Angular, uno de los frameworks m\xE1s populares para el desarrollo front-end. Descubre c\xF3mo estructurar proyectos escalables y mejorar la experiencia de usuario con componentes reutilizables y servicios robustos.",categoriaid:"fSDv3d"},{id:c(4),nombre:"Next.js",precio:80,descripcion:"Domina Next.js, el poderoso framework de React para aplicaciones de servidor y cliente. Aprender\xE1s a crear aplicaciones web optimizadas para SEO, con renderizado est\xE1tico y din\xE1mico, y a gestionar rutas y datos de forma eficiente.",categoriaid:"VCSsd3"},{id:c(4),nombre:"React Native",precio:100,descripcion:"Desarrolla aplicaciones m\xF3viles nativas multiplataforma usando React Native. En este curso, descubrir\xE1s c\xF3mo crear aplicaciones fluidas para iOS y Android, aprovechando el mismo c\xF3digo base y aprendiendo a integrar funcionalidades m\xF3viles avanzadas.",categoriaid:"sthSe8"},{id:c(4),nombre:"JavaScript Avanzado",precio:110,descripcion:"Lleva tu conocimiento de JavaScript al siguiente nivel con temas avanzados, como manejo as\xEDncrono, closures, manipulaci\xF3n del DOM y patrones de dise\xF1o. Este curso est\xE1 dise\xF1ado para quienes buscan dominar los aspectos m\xE1s complejos y poderosos del lenguaje.",categoriaid:"Thasd4"}],m=class e{obtenerProductos(){return x([...B])}static \u0275fac=function(o){return new(o||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};function U(e,t){if(e&1&&(r(0,"div",4)(1,"mat-card",5)(2,"mat-card-header")(3,"mat-card-title",6),a(4),i(),r(5,"mat-card-subtitle",7),a(6),i()(),r(7,"mat-card-content")(8,"p",8),a(9),i()(),r(10,"mat-card-actions")(11,"button",9),a(12,"LIKE"),i(),r(13,"button",9),a(14,"SHARE"),i()()()()),e&2){let o=t.$implicit;n(4),M(o.nombre),n(2),v("",o.precio," USD"),n(3),v(" ",o.descripcion," ")}}function H(e,t){if(e&1&&(r(0,"div",1)(1,"div",2),u(2,U,15,3,"div",3),i()()),e&2){let o=t.ngIf;n(2),f("ngForOf",o)}}var p=class e{constructor(t){this.servicioProductos=t;this.productos=this.servicioProductos.obtenerProductos()}productos;static \u0275fac=function(o){return new(o||e)(C(m))};static \u0275cmp=P({type:e,selectors:[["app-productos"]],decls:2,vars:3,consts:[["class","container text-center",4,"ngIf"],[1,"container","text-center"],[1,"row"],["class","col-lg-4 col-md-6 d-flex align-items-stretch contenedor",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","d-flex","align-items-stretch","contenedor"],["appearance","outlined",1,"example-card","h-100","custom-card"],[1,"fw-bold","fs-4","text-center"],[1,"fs-5","text-success"],[1,"text-muted"],["mat-button",""]],template:function(o,k){o&1&&(u(0,H,3,1,"div",0),S(1,"async")),o&2&&f("ngIf",h(1,1,k.productos))},dependencies:[I,j,R,O,_,N,F,D,A,w],styles:['@charset "UTF-8";.custom-card[_ngcontent-%COMP%]{background-color:#ffffe4;gap:10px;box-shadow:0 4px 12px #0000001a;transition:box-shadow .3s ease}.custom-card[_ngcontent-%COMP%]:hover{box-shadow:0 8px 24px #0003}.contenedor[_ngcontent-%COMP%]{margin-bottom:10px}']})};var J=[{path:"",component:p}],l=class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=d({type:e});static \u0275inj=s({imports:[b.forChild(J),b]})};var z=class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=d({type:e});static \u0275inj=s({imports:[E,l,T]})};export{z as ProductosModule};
