import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;
  static usuarioLogado: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required],
    })
  }

  realizarLogin() {
    if (this.formulario.valid) {
      LoginComponent.usuarioLogado = 'Liendson'
      window.localStorage.setItem('token', '123456')
      window.localStorage.setItem('nome', 'Liendson')
      this.router.navigate(['/'])
    } else {
      SweetAlert.exibirErro('Preencha o login e senha!')
    }
  }

}
