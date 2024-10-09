import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NombreCompletoUsuarioPipe } from './pipes/nombrecompletousuario.pipe';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { RepeticionDirective } from './directivas/repeticion.directive';
import { FontSizeDirective } from './helpers/fontsize.directive';
@NgModule({
  declarations: [
    NombreCompletoUsuarioPipe,
    ResaltadoDirective,
    RepeticionDirective,
    FontSizeDirective
  ],
  imports: [CommonModule],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    NombreCompletoUsuarioPipe,
    ResaltadoDirective,
    RepeticionDirective,
    FontSizeDirective
  ],
})
export class LinksImportadosModule { }
