import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bgColor]',
})
export class BgColorDirective implements OnInit {
  @Input('bgColor') bgColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.addClass(this.el.nativeElement, this.bgColor);
  }

  ngOnInit(): void {
    // elementin doma init olduğu anı yakaladığımız bir hook.
    // component yada elementin doma girişini bu hook yakalar.
    this.renderer.addClass(this.el.nativeElement, this.bgColor);
  }
}
