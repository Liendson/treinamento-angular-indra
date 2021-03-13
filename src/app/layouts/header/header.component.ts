import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/core/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() usuarioLogado;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  mudarRota(rota: string): void {
    this.router.navigate([rota])
  }

  logout() {
    window.localStorage.clear();
    LoginComponent.usuarioLogado = null;
    this.usuarioLogado = null;
    this.mudarRota('/login');
  }

}
