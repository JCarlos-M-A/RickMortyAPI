import { Component } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent {
  title = 'hidden';

  constructor(private servicio: ServicioRestService){
    this.servicio.apiListaCharacters();
  }

  get personajes(){
    return this.servicio.characters;
  }
}
