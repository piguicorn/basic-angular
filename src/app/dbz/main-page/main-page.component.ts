import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 14000
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return ;
    }



    console.log('hey');
  }
}
