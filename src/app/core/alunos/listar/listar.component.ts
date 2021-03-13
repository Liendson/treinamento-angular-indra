import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/shared/model/aluno';
import { AlunosService } from 'src/app/shared/services/alunos.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public listaDeAlunos: Array<Aluno> = new Array<Aluno>();

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunosService.buscar().subscribe((alunos: Array<Aluno>) => {
      this.listaDeAlunos = alunos;
    })
  }

  excluirAluno(id) {
    this.alunosService.excluir(id).subscribe(() => {
      SweetAlert.exibirSucesso('Aluno Excluido com Sucesso!').then(() => {
        this.alunosService.buscar().subscribe((alunos: Array<Aluno>) => {
          this.listaDeAlunos = alunos;
        })
      });
    })
  }

}
