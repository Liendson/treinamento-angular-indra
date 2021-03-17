import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css'],
  // é necessário adicionar esse provider na classe para funcionar
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TwoWayDataBindingComponent),
    multi: true
  }]
})
export class TwoWayDataBindingComponent implements ControlValueAccessor {

  // Essa variável vai receber o valor passado pelo [(ngModel)]
  public twoWayBinding: string

  constructor() { }

  // Esse método é chamado a cada alteração no input e atribui o
  // novo valor recebido a variável twoWayBinding além de emitir esse 
  // mesmo valor e atualizar a variável do componente pai
  set value(valor) {
    this.twoWayBinding = valor
    this.onChange(valor)
    this.onTouch(valor)
  }

  // Métodos necessários da interface ControlValueAccessor para realizar o binding
  // basta replicar junto do 'set value()'
  onChange: any = () => { }
  onTouch: any = () => { }
  writeValue(value: any) { this.value = value }
  registerOnChange(fn: any) { this.onChange = fn }
  registerOnTouched(fn: any) { this.onTouch = fn }
}
