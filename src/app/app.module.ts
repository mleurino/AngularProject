import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PanelModule } from './pages/panel/panel.module';
import { AutenticadorModule } from './pages/autenticador/autenticador.module';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ModalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AutenticadorModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
