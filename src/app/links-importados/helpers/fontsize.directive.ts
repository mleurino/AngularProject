import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetFontSize]'
})
export class FontSizeDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }
}
