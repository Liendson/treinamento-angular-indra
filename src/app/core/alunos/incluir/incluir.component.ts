import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  public nome: string = 'Liendson';
  public email: string = 'liendsondouglas1@gmail.com';
  public nota: number = 1;

  public formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.configurarFormulario()
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      nota: [null, Validators.required]
    })
  }

  visualizarFormulario() {
    console.log(this.formulario)
  }

  setEmail(event) {
    // console.log(event)
    this.email = event.target.value
  }

}
