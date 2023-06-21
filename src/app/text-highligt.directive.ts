import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

// Html ve Css uzantısı barındırmaz

@Directive({
  selector: '[textHighligt]',
})
export class TextHighligtDirective implements OnInit {
  private defaultBgColor!: string;

  // angularda servisler constructora tanımlanır.
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // var element = document.getElementById("deneme");
    var element = this.el.nativeElement as HTMLElement;
    element.style.textDecoration = 'underline';
    element.style.fontSize = '24px';
  }

  ngOnInit(): void {
    var element = this.el.nativeElement as HTMLElement;
    this.defaultBgColor = element.style.backgroundColor;
  }

  // üzerine gelince bgcolor değiştir.
  @HostListener('mouseover')
  OnMouseOver() {
    var element = this.el.nativeElement as HTMLElement;
    element.style.backgroundColor = 'Yellow';
  }

  @HostListener('mouseout')
  OnMouseOut() {
    var element = this.el.nativeElement as HTMLElement;
    element.style.backgroundColor = this.defaultBgColor;
  }
}
