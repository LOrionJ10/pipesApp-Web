import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect 
  nombre  : string = 'Edna';
  genero  : string = 'femenino';
  vuela   : boolean = false;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural 
  clientes: string[] = ['Alexandra', 'Guadalupe','Edna','Marlen', 'Armando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Armando';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Alexandra',
    edad: 21,
    direccion: 'Ottawa, Canada'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin', 
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe 
  miObservable = interval(1000); // 0,1,2,3,4,5,6

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );

  });

}
