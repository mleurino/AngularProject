import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionServicio } from '../../../nucleo/servicios/aut.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  passwordInputType: 'password' | 'text' = 'password';

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacionServicio ,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  togglePasswordInputType(): void {
    if (this.passwordInputType === 'password') {
      this.passwordInputType = 'text';
    } else {
      this.passwordInputType = 'password';
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (result) => {
          this.router.navigate(['panel', 'home']);
        },
        error: (err) => {
          console.error(err);
          if (err instanceof Error) {
            alert(err.message);
          }

          if (err instanceof HttpErrorResponse) {
            if (err.status === 0) {
              alert('No se pudo conectar con el servidor');
            }
          }
        },
      });
    }
  }
}
