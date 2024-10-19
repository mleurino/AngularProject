import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HomeModule } from './home/home.module';
import { CursosModule } from './cursos/cursos.module';

const routes: Routes = [
  {
    
      path: 'home',
      loadChildren: () => HomeModule
    
  },
  {
    path: 'usuarios',
    loadChildren: () => UsuariosModule
  },
  {
    path: 'cursos',
    loadChildren: () => CursosModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
