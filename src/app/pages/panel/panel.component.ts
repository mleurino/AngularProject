import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  showFiller = false;

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }
}
