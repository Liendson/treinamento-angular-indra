import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Aluno } from '../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private httpClient: HttpClient) { }

  incluir(aluno: Aluno) {
    return this.httpClient.post(environment.urlBackEnd, aluno);
  }

  editar(id: any, aluno: Aluno) {
    return this.httpClient.put(`${environment.urlBackEnd}/${id}`, aluno)
  }

  buscar() {
    return this.httpClient.get(`${environment.urlBackEnd}`)
  }

  excluir(id: any) {
    return this.httpClient.delete(`${environment.urlBackEnd}/${id}`)
  }

  buscarPorId(id: any) {
    return this.httpClient.get(`${environment.urlBackEnd}/${id}`)
  }

}
