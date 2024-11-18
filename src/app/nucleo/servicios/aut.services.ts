import { Injectable } from "@angular/core";
import { generarId } from "../../links-importados/helpers";
import { Usuario } from "../../pages/panel/usuarios/modelos";
import { AutenticacionData } from '../../pages/autenticador/modelos/index';
import { BehaviorSubject, map, Observable, of, throwError } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";




    @Injectable({providedIn: 'root'})
    export class AutenticacionServicio{

        

        private __authUser = new BehaviorSubject<null | Usuario >(null);
        public authUser = this.__authUser.asObservable();
        private baseURL = environment.apiBaseURL;


        constructor(private router:Router, private httpCliente: HttpClient){}
        private manejarAutententicacion (usuarios: Usuario[]): Usuario | null {
            if (!!usuarios[0]){
              //  this.__authUser.next(usuarios[0]);
                localStorage.setItem('token' ,usuarios[0].token)
                return usuarios[0];
            }else{
                return null;
            }
        }
        
        login(data: AutenticacionData): Observable <Usuario>{
            return this.httpCliente.get<Usuario[]>(`${this.baseURL}/usuarios?email=${data.email}&password=${data.password}`)
                .pipe(map((usuarios) => {
                    const usuario= this.manejarAutententicacion(usuarios)
                        if (usuario){
                            return usuario;
                        } else{
                            throw throwError (()=> new Error( 'Los datos son invalidos'))
                        }
                }))
                    
              
        
        }

        logout(){
            this.__authUser.next(null);
            this.router.navigate(['autenticacion' , 'login'])
            localStorage.removeItem('token');
        }

        verificarToken(): Observable<boolean>{
            return this.httpCliente.get<Usuario[]>(`${this.baseURL}/usuarios?token=${localStorage.getItem('token')}`)
                .pipe(map((usuarios) => {
                    const usuario = this.manejarAutententicacion(usuarios);
                    return !!usuario
                })
            );

         
        }
    }