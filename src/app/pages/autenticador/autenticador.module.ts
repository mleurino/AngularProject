import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticadorRoutingModule } from './autenticador-routing.module';
import { AutenticadorComponent } from './autenticador.component';
import { LoginComponent } from './login/login.component';

import { LinksImportadosModule } from '../../links-importados/links-importados.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AutenticadorComponent,
    LoginComponent,
    RegisterComponent
  
  
  ],
  imports: [
    CommonModule,
    AutenticadorRoutingModule,
    LinksImportadosModule
  ]
})
export class AutenticadorModule { }
