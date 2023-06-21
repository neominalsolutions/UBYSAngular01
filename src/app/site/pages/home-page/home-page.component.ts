import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

export class BasePageComponent {
  constructor(protected router: Router) {
    console.log('base component constructor');
  }
}

// 1. selector yok bir html den çağırılamaz
// 2. Input Output tanımı olmaz
// 3. Routing dosyalarından çağırılırlar.
@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent
  extends BasePageComponent
  implements OnInit, OnDestroy, DoCheck, AfterViewInit
{
  counter: number = 0;
  controller = new AbortController();
  min: number = 0;
  max: number = 100;

  // interval = setInterval(() => {
  //   this.counter++;
  //   console.log('counter', this.counter);
  // }, 1000);

  // multiple constructor desteği yok
  // constructor içene extends olan birşey yoksa super yazmaya da gerek yok.
  constructor(router: Router) {
    super(router);
    console.log('inherit component constructor');
  }

  ngOnInit(): void {
    console.log('sayfa doma girdi');

    // this.inpt.nativeElement.focus(); burada angular tarafında daha view oluşmadığından dolayı undefined olarak gelir.

    // const signal = this.controller.signal;

    // fetch('https://jsonplaceholder.typicode.com/todos/1', { signal }).then(
    //   (data) => {
    //     console.log('data', data);
    //   }
    // );
  }

  @ViewChild('inpt') inpt!: ElementRef;

  ngAfterViewInit(): void {
    // sayfa arayüzü yüklendikten sonra sayfada bulunan componentlerin ilk init oldukları anı burada yakalarız.
    this.inpt.nativeElement.focus();
    console.log(
      'component yüklendikten sonra çalışan ilk hook.',
      this.inpt.nativeElement
    );
  }

  ngOnDestroy(): void {
    console.log('sayfa domdan çıktı');
    //clearInterval(this.interval);
    //this.controller.abort(); // network istediği ile ilgili sinyali kesip kaynakları temizle.
    // socket kapatma, api call işlemlerini sonlandırma, subscription sonlandırma, webworker terminate, interval clear
  }

  ngDoCheck(): void {
    // angularda sayfa check işlemleri için ngDoCheck, ngAfterContentChecked, ngAfterViewChecked
    // console.log('ngDoCheck');
  }

  onMouseMove($event: MouseEvent) {
    // console.log('$event', $event);
  }

  names: string[] = ['ali', 'ahmet'];
  currentUser: any = { name: 'ali' };
  add(inpt: HTMLInputElement) {
    // this.names.push(inpt.value);
    // names dizisinin değeri değiştiriği için
    // app-ref-types-on-change onChnages hook tetiklenmelidir.

    // yeni bir dizi referansı oluşturmak için js spread operatörünü kullanıyoruzç
    // this.names = [...this.names, inpt.value]; // append
    this.names = [inpt.value, ...this.names]; // prepend olarak çalışır.
    // this.currentUser.name = inpt.value;
    this.currentUser = { ...this.currentUser, name: inpt.value };
  }
}
