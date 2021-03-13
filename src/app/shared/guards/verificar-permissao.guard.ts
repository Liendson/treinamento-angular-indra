import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SweetAlert } from '../sweet-alert';

@Injectable({
  providedIn: 'root'
})
export class VerificarPermissaoGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (window.localStorage.getItem('token')) {
      return true
    } else {
      SweetAlert.exibirErro('Erro de acesso!').then(() => {
        this.router.navigate(['/login'])
      })
    }
  }
}
