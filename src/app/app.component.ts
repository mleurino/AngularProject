import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild, viewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'FirstProject';

  alumnosAprobados = ["Naruto", "Goku"];
  alumnosDesaprobados = ["Gohan"];

  @ViewChild('myButton') myButtonRef?: ElementRef<HTMLButtonElement>;
  constructor(){
    console.log(this.myButtonRef)
  }
  ngAfterViewInit(): void {
    console.log(this.myButtonRef);
  }
    
 
  

  eliminarAlumno(index: number, from: "aprobados" | "desaprobados"){
    if(from === "aprobados"){
      this.alumnosAprobados= this.alumnosAprobados.filter((v, i) =>
    index !== i
    );
    } else {
      this.alumnosDesaprobados= this.alumnosDesaprobados.filter((v, i) =>
        index !== i
        );
    }
    
  }
}
