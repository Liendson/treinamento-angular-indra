import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { IncluirComponent } from './core/alunos/incluir/incluir.component';
import { ListarComponent } from './core/alunos/listar/listar.component';
import { CardComponent } from './layouts/card/card.component';
import { ButtonComponent } from './layouts/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './core/alunos/editar/editar.component';
import { TableModule } from 'primeng/table';
import { CustomPipe } from './shared/pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncluirComponent,
    ListarComponent,
    CardComponent,
    ButtonComponent,
    EditarComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
