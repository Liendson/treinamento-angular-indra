import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 5) {
      return value.slice(0, 5).concat('...');
    }
  }

}
