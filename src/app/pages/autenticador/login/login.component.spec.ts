import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { LoginComponent } from './login.component';
import { AutenticacionServicio } from '../../../nucleo/servicios/aut.services';
import { Usuario } from '../../panel/usuarios/modelos/index';

describe('LoginComponent', () => {
  let componente: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AutenticacionServicio>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AutenticacionServicio', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [
        { provide: AutenticacionServicio, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(componente).toBeTruthy();
  });

  it('debería inicializar el formulario con campos vacíos', () => {
    expect(componente.loginForm.get('email')?.value).toBe('');
    expect(componente.loginForm.get('password')?.value).toBe('');
  });

  it('debería marcar todos los campos como "tocados" si el formulario es inválido al enviar', () => {
    componente.onSubmit();
    expect(componente.loginForm.get('email')?.touched).toBeTrue();
    expect(componente.loginForm.get('password')?.touched).toBeTrue();
  });

  

  it('debería manejar una respuesta de error', () => {
    spyOn(window, 'alert');
    mockAuthService.login.and.returnValue(throwError(() => new Error('Inicio de sesión fallido')));
    componente.loginForm.setValue({ email: 'hsimpson1234@gmail.com', password: '12345678' });
    componente.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Inicio de sesión fallido');
  });
});