import { Component, Inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generarId } from '../../../../links-importados/helpers';
import { Usuario } from '../modelos/index';

interface DialogoUsuarioData {
  editandoUsuario?: Usuario;
}

@Component({
  selector: 'app-dialogo-usuarios',
  templateUrl: './dialogo-usuarios.component.html',
  styleUrl: './dialogo-usuarios.component.scss'
})
export class DialogoUsuariosComponent {
  userForm : FormGroup
 
  
  constructor(private matDialofRef: MatDialogRef<DialogoUsuariosComponent>, private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: DialogoUsuarioData
  ){
    
    this.userForm= this.formBuilder.group({
      nombre:[null, [Validators.required, Validators.minLength(2), Validators.maxLength(30),
        Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$')
      ]],
      apellido:[null, [Validators.required,Validators.minLength(2), Validators.maxLength(30),
        Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$')
      ]],
      email:[null, [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]]
    })
    this.cambiarDatosFormulario();
}

  cambiarDatosFormulario(){
    if (this.data?.editandoUsuario){
      this.userForm.patchValue(this.data.editandoUsuario)
    }
  }

  guardar(): void{
    if(this.userForm.invalid){
    this.userForm.markAllAsTouched
  } else {
    this.matDialofRef.close( {...this.userForm.value,
      creadoFecha: new Date,
      id:this.data?.editandoUsuario ? this.data?.editandoUsuario.id : generarId(5)
    } );
    
  }
  }
    

    
}
