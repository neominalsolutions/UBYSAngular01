import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ValueTypesOnChangesComponent } from './pages/home-page/features/components/value-types-on-changes/value-types-on-changes.component';
import { FormsModule } from '@angular/forms';
import { RefTypesOnChangesComponent } from './pages/home-page/features/components/ref-types-on-changes/ref-types-on-changes.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ValueTypesOnChangesComponent,
    RefTypesOnChangesComponent,
  ],
  imports: [CommonModule, SiteRoutingModule, FormsModule],
})
export class SiteModule {}
