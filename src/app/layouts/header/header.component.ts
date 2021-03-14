import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  mudarRota(rota: string): void {
    this.router.navigate([rota])
  }

  usuarioLogado() {
    return window.localStorage.getItem('nome');
  }

  logout() {
    window.localStorage.clear();
    this.mudarRota('/login');
  }

}
