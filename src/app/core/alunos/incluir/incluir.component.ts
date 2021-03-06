import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from 'src/app/shared/model/aluno';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  public formulario: FormGroup;

  get nome(): any { return this.formulario.get('nome') }
  get email(): any { return this.formulario.get('email') }
  get nota(): any { return this.formulario.get('nota') }

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      nota: [null, Validators.required]
    })
  }

  submit() {

    if (this.formulario.valid) {
      const aluno: Aluno = new Aluno();

      aluno.nome = this.nome.value;
      aluno.email = this.email.value;
      aluno.nota = this.nota.value;
  
      this.httpClient.post(environment.urlBackEnd, aluno).subscribe((retorno) => {
        Swal.fire(
          'Sucesso!',
          'Aluno incluído com sucesso!',
          'success'
        )
      })
    } else {
      Swal.fire(
        'Erro!',
        'Formulário Inválido',
        'error'
      )
    }
  }

}
