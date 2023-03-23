import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ServicioRestService } from 'src/app/ServicioRest/servicio-rest.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html'
})
export class AddCharactersComponent {

  @Output() cambioCharacter: EventEmitter<boolean> = new EventEmitter();
  @Input() nameEdit: string = "";
  @Input() imgEdit: string = "";

    /**
   *ctor
   */
   constructor(private restService: ServicioRestService) {
    this.restService.apiListaEpidodes();
    this.restService.apiListaLocations();
   }

  imagen="https://rickandmortyapi.com/api/character/avatar/281.jpeg";
  status = true;
  ngOnInit() {
    //
    this.imagen=this.imgEdit;
  }

  onChangeStatus(status: boolean) {  
    //
    this.status = !this.status;
    console.log(status);
  }

  @ViewChild("urlImagen")
  urlImage!:ElementRef;

  Buscar(): void{
    this.imagen = this.urlImage.nativeElement.value;
  }

  modal() {
    this.cambioCharacter.emit();
  }
  @ViewChild("name")
  name!:ElementRef;
  @ViewChild("species")
  species!:ElementRef;
  @ViewChild("location")
  location!:ElementRef;
  @ViewChild("episode")
  episode!:ElementRef;

  add(): void{
    console.log("enviar");
    this.cambioCharacter.emit();
    const name: String = this.name.nativeElement.value;
    const status: Boolean = this.status;
    //console.log(this.status.nativeElement.value);
    const species: String = this.species.nativeElement.value;
    const location: number = this.location.nativeElement.value;
    const episode: number = this.episode.nativeElement.value;

    this.restService.apiGuardarCharacter(name, status, species, location, episode, this.imagen);
  }
  get episodes(){
    return this.restService.episodes;
  }

  get locations(){
    return this.restService.locations;
  }

}
