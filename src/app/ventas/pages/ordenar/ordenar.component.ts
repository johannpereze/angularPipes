import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  toggleMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  enMayusculas() {
    this.toggleMayusculas = !this.toggleMayusculas;
  }
}
