import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { generarId } from '../../../links-importados/helpers';
import { Usuario } from '../../panel/usuarios/modelos';
import { AutenticacionServicio } from '../../../nucleo/servicios/aut.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  passwordInputType: 'password' | 'text' = 'password';
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private registroService: AutenticacionServicio,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido:['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  togglePasswordInputType(): void {
    this.passwordInputType =
      this.passwordInputType === 'password' ? 'text' : 'password';
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      
      const nuevoUsuario: Usuario = {
        id: generarId(4),
        nombre: this.registerForm.value.nombre,
        apellido: this.registerForm.value.apellido,
        email: this.registerForm.value.email,
        contraseña: this.registerForm.value.password,
        rol: 'USER',
        token: generarId(20),
        creadoFecha: new Date(), 
        Aprobado: false
      };
      // Llamar al servicio de registro
      this.registroService.registrarUsuario(nuevoUsuario).subscribe({
        next: () => {
          // Mostrar mensaje de éxito
          this.snackBar.open('Registro exitoso. Redirigiendo al login...', 'Cerrar', {
            duration: 3000,
          });

          // Redirigir al login después de un tiempo
          setTimeout(() => {
            this.router.navigate(['/autenticacion/login']);
          }, 3000);
        },
        error: (err) => {
          // Mostrar mensaje de error
          this.snackBar.open(`Error al registrarse: ${err.message}`, 'Cerrar', {
            duration: 3000,
          });
        },
      });
    } else {
     
      this.registerForm.markAllAsTouched();
      
      
    }
  }
}
