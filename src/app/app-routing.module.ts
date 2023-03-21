import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharactersComponent } from './Characters/list-characters/list-characters.component';
import { ListLocationsComponent } from './Locations/list-locations/list-locations.component'; 
import { ListEpisodesComponent } from './Episodes/list-episodes/list-episodes.component';
import { MainComponent } from './Utils/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'list/listCharacters', component: ListCharactersComponent
  },
  {
    path: 'list/listLocations', component: ListLocationsComponent
  },
  {
    path: 'list/listEpisodes', component: ListEpisodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
