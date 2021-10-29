import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string='seBaSTian'
  nombreUpper:string='SEbaSTIAN'
  nombreCompleto:string='sEbaStian pÉrez'

  fecha:Date = new Date();

}
