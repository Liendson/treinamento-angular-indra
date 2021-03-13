import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './core/alunos/editar/editar.component';
import { IncluirComponent } from './core/alunos/incluir/incluir.component';
import { ListarComponent } from './core/alunos/listar/listar.component';
import { PaginaInicialComponent } from './layouts/pages/pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './layouts/pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { VerificarPermissaoGuard } from './shared/guards/verificar-permissao.guard';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent
  },
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
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
