import { Component } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html'
})
export class ListEpisodesComponent {
  constructor(private servicio: ServicioRestService){
    this.servicio.apiListaEpidodes();
  }

  get episodes(){
    return this.servicio.episodes;
  }
}
