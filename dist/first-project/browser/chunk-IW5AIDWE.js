import{a as T,b as V,d as q,e as z,f as H,y as J}from"./chunk-7QRKQRV6.js";import{j as A,l as D,m as f,o as L,p as U,r as B,s as G,t as O,u as P}from"./chunk-YCQZQQQU.js";import{J as j,K as E}from"./chunk-SOHMW4PZ.js";import{a as R,i as c,l as F}from"./chunk-JGKZYM5P.js";import{Db as S,Lc as N,Pb as n,Ta as w,Ua as u,X as _,Y as s,aa as k,fa as p,ga as l,j as x,m as I,n as M,nb as C,ub as i,vb as r,wb as y}from"./chunk-KLRYANPK.js";var a={id:T(4),nombre:"Maximiliano",apellido:"Leurino",contrase\u00F1a:"12345678",email:"mleurino8@gmail.com",creadoFecha:new Date,Aprobado:!0,token:"asdfghjkl\xF1zxcvbnmqwe"},d=class e{constructor(t){this.router=t}__authUser=new x(null);authUser=this.__authUser.asObservable();login(t){return t.email!=a.email||t.password!=a.contrase\u00F1a?M(()=>new Error("Los datos son invalidos")):(this.__authUser.next(a),localStorage.setItem("token",a.token),I(a))}logout(){this.__authUser.next(null),this.router.navigate(["autenticacion","login"]),localStorage.removeItem("token")}verificarToken(){let t=localStorage.getItem("token")===a.token;return t?this.__authUser.next(a):this.__authUser.next(null),I(t)}static \u0275fac=function(o){return new(o||e)(k(c))};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})};var v=class e{constructor(t,o,m){this.formBuilder=t;this.authService=o;this.router=m;this.loginForm=this.formBuilder.group({email:["",[f.required,f.email]],password:["",[f.required]]})}passwordInputType="password";loginForm;togglePasswordInputType(){this.passwordInputType==="password"?this.passwordInputType="text":this.passwordInputType="password"}onSubmit(){this.loginForm.invalid?this.loginForm.markAllAsTouched():this.authService.login(this.loginForm.value).subscribe({next:t=>{this.router.navigate(["panel","home"])},error:t=>{console.error(t),t instanceof Error&&alert(t.message),t instanceof R&&t.status===0&&alert("No se pudo conectar con el servidor")}})}static \u0275fac=function(o){return new(o||e)(u(P),u(d),u(c))};static \u0275cmp=p({type:e,selectors:[["app-login"]],decls:19,vars:2,consts:[[1,"row",3,"ngSubmit","formGroup"],[1,"col-12"],[1,"w-100"],["formControlName","email","matInput",""],["formControlName","password","matInput","",3,"type"],["type","button","matSuffix","","mat-icon-button","",3,"click"],["type","submit","mat-flat-button","",1,"w-100"]],template:function(o,m){o&1&&(i(0,"h1"),n(1,"Iniciar sesion"),r(),i(2,"form",0),S("ngSubmit",function(){return m.onSubmit()}),i(3,"div",1)(4,"mat-form-field",2)(5,"mat-label"),n(6,"Email"),r(),y(7,"input",3),r()(),i(8,"div",1)(9,"mat-form-field",2)(10,"mat-label"),n(11,"Contrasena"),r(),y(12,"input",4),i(13,"button",5),S("click",function(){return m.togglePasswordInputType()}),i(14,"mat-icon"),n(15,"visibility"),r()()()(),i(16,"div",1)(17,"button",6),n(18,"Ingresar"),r()()()),o&2&&(w(2),C("formGroup",m.loginForm),w(10),C("type",m.passwordInputType))},dependencies:[B,D,L,U,G,O,j,E,A,z,V,q,H]})};var b=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=p({type:e,selectors:[["app-register"]],decls:2,vars:0,template:function(o,m){o&1&&(i(0,"p"),n(1,"register works!"),r())}})};var Z=[{path:"login",component:v},{path:"register",component:b},{path:"**",redirectTo:"login"}],h=class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=l({type:e});static \u0275inj=s({imports:[F.forChild(Z),F]})};var K=class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=l({type:e});static \u0275inj=s({imports:[N,h,J]})};export{d as a,K as b};