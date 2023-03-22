import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestService {

  public characters: any[] = [];
  public locations: any[] = [];
  public episodes: any[] = [];
  public personajes: any[] = [];
  public verdadAlert: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  public apiListaCharacters(): void {
    let characterstemp: any[] = [];
    for (let i = 0; i < 6; i++) {
      this.http.get('https://rickandmortyapi.com/api/character/'+Math.floor(Math.random() * 800)).subscribe((resp: any) => {
        //console.log(resp);
        characterstemp.push(resp);
      });
    }
    this.characters = characterstemp;
  }

  public apiListaPersonajes() {
    this.http.get('http://localhost:8080/api/characters').subscribe((resp: any) => {
      //console.log(resp);
      this.personajes = resp;
    });
  }

  public apiListaLocations(): void{
    this.http.get('http://localhost:8080/api/locations').subscribe((resp: any) => {
      //console.log(resp);
      this.locations = resp;
    });
  }
  
  public apiListaEpidodes(): void{
    this.http.get('http://localhost:8080/api/episodes').subscribe((resp: any) => {
      //console.log(resp);
      this.episodes = resp;
    });
  }

  public apiGuardarLocation(name: String, type: String, dimension: String) {
    let datos = {
      name: name,
      type: type,
      dimension: dimension
    };

    this.http.post('http://localhost:8080/api/locations', datos, { observe: "response" })
      .subscribe((resp: any) => {
        console.log(resp);
        this.locations.push(resp.body);
        //this.router.navigate(['/list/listLocations']);
      });
  }

  public apiEliminarLocation(id: number) {
    this.http.delete('http://localhost:8080/api/locations/'+id, { observe: "response" })
      .subscribe((resp: any) => {
        console.log(resp);
        if(resp.status==200){
          this.eliminarDeArray(this.locations, id);
        }
        //this.router.navigate(['/list/listLocations']);
      });
  }

  public apiGuardarEpisode(name: String, air_date: Date, episode: String){
    let datos = {
      name: name,
      air_date: air_date,
      episode: episode
    };

    this.http.post('http://localhost:8080/api/episodes', datos, { observe: "response" })
      .subscribe((resp: any) => {
        //console.log(resp);
        this.episodes.push(resp.body)
        //this.router.navigate(['/list/listEpisodes']);
      });
  }

  public apiEliminarEpisodes(id: number) {
    this.http.delete('http://localhost:8080/api/episodes/'+id, { observe: "response" })
      .subscribe((resp: any) => {
        console.log(resp);
        if(resp.status==200){
          this.eliminarDeArray(this.episodes, id);
        }
        //this.router.navigate(['/list/listLocations']);
      });
  }

  public apiGuardarCharacter(name: String, status: Boolean, species: String, location: number, episode: number, image: String){
    let datos = {
      id: 54545,
	    name: name,
	    status: status, 
      specie: species,
      location: location,
      episode: episode,
	    image: image
}
    this.verdadAlert = true;
    this.http.post('http://localhost:8080/api/characters', datos, { observe: "response" })
      .subscribe((resp: any) => {
        //console.log(resp.body);
        this.personajes.push(resp.body);
        //this.router.navigate(['/list/listCharacters']);
      });
  }

  eliminarDeArray(array1: any, id: number){
    let index = array1.findIndex((item: any) => item.id === id);
    array1.splice(index, 1);
  }
}
