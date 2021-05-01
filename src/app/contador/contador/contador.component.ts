import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h2>
            la base es: <strong>{{ base }}</strong>
        </h2>


        <button (click)="calcular(base)">+{{ base }}</button>
        <span> {{ numero }} </span>
        <button (click)="calcular(-base)">-{{ base }}</button>
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 0;
    base: number = 5;
  
    calcular( valor: number): void {
      this.numero += valor;
    }
}