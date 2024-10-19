import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CursosModule } from './cursos/cursos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    PanelComponent,
    
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    CursosModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsuariosModule,
    MatListModule,
  
  ],
  exports:[
    PanelComponent
  ]
})
export class PanelModule { }
