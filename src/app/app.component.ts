import { Component } from '@angular/core';
import { Config } from './shared/components/test/test.component';

@Component({
  selector: 'app-root', // componentin html üzerinden çağırıldığı isim.
  templateUrl: './app.component.html', // component hangi html üzerinden içerik oluşturur.
  styleUrls: ['./app.component.scss'], // componentin kendine özgü stilleri.
})
export class AppComponent {
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
