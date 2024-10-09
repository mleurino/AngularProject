import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {

  @Input()
  color = 'yellow'

  constructor(private el: ElementRef<HTMLElement>) { 
    this.aplicarEstilos
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("hola" +changes)
  }
  
  
  aplicarEstilos(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
