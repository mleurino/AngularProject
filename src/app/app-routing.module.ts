import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticadorComponent } from './pages/autenticador/autenticador.component';
import { PanelComponent } from './pages/panel/panel.component';
import { authGuard } from './nucleo/guards/auth.guard';


const routes: Routes = [
  {
    path: 'autenticacion',
    component: AutenticadorComponent,
    loadChildren: () =>
      import('./pages/autenticador/autenticador.module').then((m) => m.AutenticadorModule),
  },
  {
    path: 'panel',
    canActivate: [authGuard] ,
    component: PanelComponent,
    loadChildren: () =>
      import('./pages/panel/panel.module').then(
        (m) => m.PanelModule
      ),
  },
  {
    path: '**',
    redirectTo: 'autenticacion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
