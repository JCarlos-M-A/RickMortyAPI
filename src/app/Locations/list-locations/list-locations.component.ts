import { Component } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html'
})
export class ListLocationsComponent {

  constructor(private servicio: ServicioRestService){
    this.servicio.apiListaLocations();
  }

  eliminarLocation(id: number){
    this.servicio.apiEliminarLocation(id);
  }

  get locations(){
    return this.servicio.locations;
  }
}
