import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/interfaces';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  transform(val: boolean): string {
    return val ? 'vuela' : 'no vuela';
  }
}
