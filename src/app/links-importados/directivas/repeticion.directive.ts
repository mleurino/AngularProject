import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appRepeticion]'
})
export class RepeticionDirective implements OnChanges {

  @Input()
  appRepeticion: number = 0;

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<HTMLElement>) { 
    this.repeat();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appRepeticion']){
      this.repeat();
    }
  }

  repeat(): void {
    this.viewContainer.clear();
    for (let index = 0; index < this.appRepeticion; index++) {
      this.viewContainer.createEmbeddedView(this.template);
      
    }
  }

}
