import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './core/alunos/editar/editar.component';
import { IncluirComponent } from './core/alunos/incluir/incluir.component';
import { ListarComponent } from './core/alunos/listar/listar.component';
import { LoginComponent } from './core/login/login.component';
import { PaginaInicialComponent } from './layouts/pages/pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './layouts/pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { VerificarPermissaoGuard } from './shared/guards/verificar-permissao.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PaginaInicialComponent,
    canActivate: [VerificarPermissaoGuard]
  },
  {
    path: 'alunos/incluir',
    component: IncluirComponent,
    canActivate: [VerificarPermissaoGuard]
  },
  {
    path: 'alunos/listar',
    component: ListarComponent,
    canActivate: [VerificarPermissaoGuard]
  },
  {
    path: 'alunos/editar/:id',
    component: EditarComponent,
    canActivate: [VerificarPermissaoGuard]
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
    canActivate: [VerificarPermissaoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
