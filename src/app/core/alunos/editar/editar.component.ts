import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/shared/model/aluno';
import { AlunosService } from 'src/app/shared/services/alunos.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  public formulario: FormGroup;

  get id(): any { return this.formulario.get('id') }
  get nome(): any { return this.formulario.get('nome') }
  get email(): any { return this.formulario.get('email') }
  get nota(): any { return this.formulario.get('nota') }

  constructor(
    private formBuilder: FormBuilder,
    private alunosService: AlunosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.alunosService.buscarPorId(id).subscribe((aluno: any) => {
      this.formulario = this.formBuilder.group({
        id: [aluno.id, Validators.required],
        nome: [aluno.nome, Validators.required],
        email: [aluno.email, Validators.required],
        nota: [aluno.nota, Validators.required]
      })
    })
  }

  submit() {
    if (this.formulario.valid) {
      const aluno: Aluno = new Aluno();

      aluno.nome = this.nome.value;
      aluno.email = this.email.value;
      aluno.nota = this.nota.value;

      this.alunosService.editar(this.id.value, aluno).subscribe((retorno: Aluno) => {
        SweetAlert.exibirSucesso('Aluno ' + retorno.nome + ' alterado com sucesso!').then(() => {
          this.router.navigate(['alunos/listar']);
        })
      })
    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
  }

}
