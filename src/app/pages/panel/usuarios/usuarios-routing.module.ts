import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { DetalleusuarioComponent } from './detalleusuario/detalleusuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: ':id/detail',
    component: DetalleusuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
