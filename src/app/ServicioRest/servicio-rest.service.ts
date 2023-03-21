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
        //console.log(resp);
        this.router.navigate(['/list/listLocations']);
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
        this.router.navigate(['/list/listEpisodes']);
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
    this.http.post('http://localhost:8080/api/characters', datos, { observe: "response" })
      .subscribe((resp: any) => {
        //console.log(resp);
        this.router.navigate(['/list/listCharacters']);
      });
  }
}
