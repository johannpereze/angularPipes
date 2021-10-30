import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {

nombre:string= "Tatiana"
genero:string =  'femenino'

invitacionMap ={
'masculino':"invitarlo",
'femenino': "invitarla"
}

}
