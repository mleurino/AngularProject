import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { DetalleCursosComponent } from './detalle-cursos/detalle-cursos.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: ':id',
    component: DetalleCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
