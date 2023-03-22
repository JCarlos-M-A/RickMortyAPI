import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-add-locations',
  templateUrl: './add-locations.component.html'
})
export class AddLocationsComponent {

  constructor(private restService: ServicioRestService) {
    
  }

  @Output() cambioLocation: EventEmitter<boolean> = new EventEmitter();
  modal() {
    this.cambioLocation.emit();
  }

  @ViewChild("name")
  name!:ElementRef;
  @ViewChild("type")
  type!:ElementRef;
  @ViewChild("dimension")
  dimension!:ElementRef;


  add() {
    console.log("enviar");
    this.cambioLocation.emit();
    const name: String = this.name.nativeElement.value;
    const type: String = this.type.nativeElement.value;
    const dimension: String = this.dimension.nativeElement.value;

    this.restService.apiGuardarLocation(name, type, dimension);
  }
}
