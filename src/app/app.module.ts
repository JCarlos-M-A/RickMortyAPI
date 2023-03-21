import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCharactersComponent } from './Characters/list-characters/list-characters.component';
import { NavigationBarComponent } from './Utils/navigation-bar/navigation-bar.component';
import { FooterComponent } from './Utils/footer/footer.component';
import { ListLocationsComponent } from './Locations/list-locations/list-locations.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './Utils/main/main.component';
import { ListEpisodesComponent } from './Episodes/list-episodes/list-episodes.component';
import { AddEpisodeComponent } from './Episodes/add-episode/add-episode.component';
import { AddCharactersComponent } from './Characters/add-characters/add-characters.component';
import { AddLocationsComponent } from './Locations/add-locations/add-locations.component';
import { AlertComponent } from './Utils/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCharactersComponent,
    NavigationBarComponent,
    FooterComponent,
    ListLocationsComponent,
    MainComponent,
    ListEpisodesComponent,
    AddEpisodeComponent,
    AddCharactersComponent,
    AddLocationsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
