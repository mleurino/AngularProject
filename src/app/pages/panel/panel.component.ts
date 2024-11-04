import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionServicio } from '../../nucleo/servicios/aut.services';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios/modelos';
import { environment } from '../../../environments/environment';




@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  showFiller = false;
  authUser : Observable<Usuario | null>;
  
  constructor(private router: Router,private authService: AutenticacionServicio) {
    this.authUser = this.authService.authUser;
  }




  logout(): void {
    
    this.authService.logout();
  }
}
