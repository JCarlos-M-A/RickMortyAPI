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

  verdadCaracter: boolean = false;
  nameEdit: string = "";
  imgEdit: string = "";
  hideCaracterModal(){
    //
  }

  editar(name: string, image: string, status: boolean, specie: string, location: any, episodes: any){
    console.log(image)
    this.verdadCaracter=true;
    this.nameEdit = name;
    this.imgEdit = image;
  }

  get personajes(){
    return this.servicio.personajes;
  }
}
