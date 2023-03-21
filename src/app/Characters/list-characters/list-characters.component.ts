import { Component } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html'
})
export class ListCharactersComponent {
  constructor(private servicio: ServicioRestService){
    this.servicio.apiListaPersonajes();
  }

  get personajes(){
    return this.servicio.personajes;
  }
}
