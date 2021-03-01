import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeiroComponenteComponent } from './core/primeiro-componente/primeiro-componente.component';
import { SegundoTesteComponent } from './core/segundo-teste/segundo-teste.component';

const routes: Routes = [
  {
    path: '',
    component: PrimeiroComponenteComponent
  },
  {
    path: 'alunos',
    component: SegundoTesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
