import { Component } from '@angular/core';
import { LoginComponent } from './core/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usuarioLogado = LoginComponent.usuarioLogado
}
