import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { DetalleCursosComponent } from './detalle-cursos/detalle-cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    DetalleCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
