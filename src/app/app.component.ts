import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  nombre: string = 'Alexandra';
  valor: number = 10100;

  mostrarNombre(){
    console.log( this.nombre );
  }
}