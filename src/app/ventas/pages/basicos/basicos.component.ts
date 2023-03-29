import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower   : string = 'Edna';
  nombreUpper   : string = 'EDNA';
  nombreCompleto: string = 'eDnA lEcEa';


  fecha: Date = new Date(); // dia de hoy
}
