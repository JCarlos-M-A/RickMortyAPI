import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-add-episode',
  templateUrl: './add-episode.component.html'
})

export class AddEpisodeComponent {

  constructor(private restService: ServicioRestService) {
    
  }

  @Output() cambioEpisode: EventEmitter<boolean> = new EventEmitter();
  modal() {
    this.cambioEpisode.emit();
  }

  @ViewChild("name")
  name!:ElementRef;
  @ViewChild("air_date")
  air_date!:ElementRef;
  @ViewChild("episode")
  episode!:ElementRef;

  add(): void{
    console.log("enviar");
    const name: String = this.name.nativeElement.value;
    const air_date: Date = this.air_date.nativeElement.value;
    const episode: String = this.episode.nativeElement.value;

    this.restService.apiGuardarEpisode(name, air_date, episode);
  }
}
