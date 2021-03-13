import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './core/alunos/editar/editar.component';
import { IncluirComponent } from './core/alunos/incluir/incluir.component';
import { ListarComponent } from './core/alunos/listar/listar.component';
import { VerificarPermissaoGuard } from './shared/guards/verificar-permissao.guard';

const routes: Routes = [
  {
    path: 'alunos/incluir',
    component: IncluirComponent,
    canActivate: [VerificarPermissaoGuard]
  },
  {
    path: 'alunos/listar',
    component: ListarComponent
  },
  {
    path: 'alunos/editar/:id',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
