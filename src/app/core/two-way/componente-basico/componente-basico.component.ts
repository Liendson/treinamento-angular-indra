import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-basico',
  templateUrl: './componente-basico.component.html',
  styleUrls: ['./componente-basico.component.css']
})
export class ComponenteBasicoComponent implements OnInit {

  public twoWayBinding;

  constructor() { }

  ngOnInit(): void {
  }

}
