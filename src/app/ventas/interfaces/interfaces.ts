export interface Cliente {
    nombre: string;
    genero: string;
  }

  export enum Color{
      rojo,negro,azul,verde
  }

export interface Heroe{
    nombre: string;
    vuela: boolean;
    color: Color;
}