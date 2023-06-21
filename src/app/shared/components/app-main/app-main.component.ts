import { Component } from '@angular/core';
import { Config } from '../test/test.component';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
})
export class AppMainComponent {
  showMessage(config: Config | null) {
    console.log('config', config);
  }

  title: string = 'IKCApp01'; // property
  visible: boolean = false;
  note: string = '';

  //  public get value() : string {
  //   return  this._title
  //  }

  //  public set value(v : string) {
  //   this._title = v;
  //  }

  // get Title(): string {
  //   return this._title;
  // }

  // set Title(value: string) {
  //   this._title = value;
  // }

  // ts dosyasında method ve propertyler önlerinde hiç bir takı yoksa public sayılır.

  click(): void {
    // method
    // this.value('deneme1');
    this.title = 'Deneme1';
  }
}
