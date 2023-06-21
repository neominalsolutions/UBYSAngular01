import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// import { AppModule } from './app/app.module';
// c# using yerine burada TS dosyalarının referanslarını kullanmak için import keyword kullanırız.

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Program.cs
// AppModule ana module uygulama ait tüm bileşenler AppModule üzerine tanımlanıyor.
// AppModule Components,Directives,Pipes,Services,Providers tüm bu bileşenleri AppModule dosyasına tanıtıyoruz.
