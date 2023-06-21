import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { TextHighligtDirective } from './text-highligt.directive';
import { BgColorDirective } from './bg-color.directive';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { OrderStatusPipe } from './order-status.pipe';

// annotatios class özellik kazanıyor.
// Components User Control yada Partial Html, View Component gibi düşünebiliriz.
// Net Core Tag Helperlarıda Directives, Html Elementlerine yeni özellikler kazandıran yapılara directives deniyor.
// Pipes larda veri transform işlemlerini yapıyor. date.toShortDateString(); date | short "ali".toUpper() "ali" | upperCase

@NgModule({
  declarations: [
    // Directives,Pipes,Components uygulama tanıttığımız yer.
    AppComponent,
    TestComponent,
    TextHighligtDirective,
    BgColorDirective,
    PipeTestComponent,
    OrderStatusPipe,
  ],
  imports: [
    // 3rd Paketleri npmden yüklediğimiz paketleri uygulamada kullanmamızı sağlayn kısım.
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [OrderStatusPipe], // servis tanımları servis registration IServiceCollection, Pipe service gibi TS den consturctor içinde kullanılacağı zaman provider içinde tanımlanıyor.
  bootstrap: [AppComponent],
})
export class AppModule {} // Ts Export c# public keyword karşılık gelir.Bir TS dosyasının başka bir TS dosyasında çağırılmasını sağlar.
