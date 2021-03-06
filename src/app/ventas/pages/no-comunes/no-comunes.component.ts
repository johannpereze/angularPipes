import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Cliente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nselect
  cliente: Cliente = {
    nombre: 'Tatiana',
    genero: 'femenino',
  };

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i8nplural

  clientes: string[] = ['Maria', 'Pedro', 'Ana', 'Jose', 'Luis'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  borrarCliente() {
    this.clientes.pop();
  }
  cambiarCliente() {
    this.cliente.nombre === 'Tatiana'
      ? (this.cliente = {
          nombre: 'Johann',
          genero: 'masculino',
        })
      : (this.cliente = {
          nombre: 'Tatiana',
          genero: 'femenino',
        });
  }

  //keyValuePipe
  persona = {
    nombre: 'Johann',
    edad: 35,
    direccion: 'Medellín, Colombia',
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Acuaman',
      vuela: false,
    },
  ];

  //Async Pipe

  miObservable = interval(1000);

  valorpromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promesa resuelta :)');
    }, 7000);
  });
}
