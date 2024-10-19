import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { DialogoUsuariosComponent } from './dialogo-usuarios/dialogo-usuarios.component';
import { LinksImportadosModule } from '../../../links-importados/links-importados.module';
import { DetalleusuarioComponent } from './detalleusuario/detalleusuario.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    DialogoUsuariosComponent,
    DetalleusuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    LinksImportadosModule
  ],
  exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
