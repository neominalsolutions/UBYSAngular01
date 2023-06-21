import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Config {
  key: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  // componentin ilk açılışında parametreli bir şekilde açılması için Input tanımı yapılıyor.
  // Pure ve Default componentler Input değerine sahip oluyor.

  @Input() title!: string;
  //@Input() title1: string | undefined | number | any; // Union Types
  @Input() config!: Config;

  // component içinde dinlecek olan bir event tanımı yaptık.
  // Output JS AddEventlistener ile aynı şey.
  @Output() onClick = new EventEmitter<Config>();

  constructor() {}

  click() {
    this.onClick.emit(this.config);
  }
}
