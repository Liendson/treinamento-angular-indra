import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './core/primeiro-componente/primeiro-componente.component';
import { SegundoTesteComponent } from './core/segundo-teste/segundo-teste.component';
import { TerceiroTesteComponent } from './core/terceiro-teste/terceiro-teste.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoTesteComponent,
    TerceiroTesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
