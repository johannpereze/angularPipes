import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/interfaces';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(val: number): string {
    return Color[val];
  }

}
