import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Alexandra';
  valor: number = 10100;

  mostrarNombre(){
    console.log( this.nombre );
  }
}