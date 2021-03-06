import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncluirComponent } from './core/alunos/incluir/incluir.component';
import { ListarComponent } from './core/alunos/listar/listar.component';

const routes: Routes = [
  {
    path: 'alunos/incluir',
    component: IncluirComponent
  },
  {
    path: 'alunos/listar',
    component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
