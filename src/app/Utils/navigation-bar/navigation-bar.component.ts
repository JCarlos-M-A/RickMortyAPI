import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent {
  @ViewChild('opcionSeleccionado') teams!: ElementRef;
  constructor(private router: Router) { }

  selectedItem = '';
  capturar(): void {
    this.selectedItem = this.teams.nativeElement.value;
    this.router.navigate([this.selectedItem]);
  }

  verdadEpisode: boolean = false;
  verdadCaracter: boolean = false;
  verdadLocation: boolean = false;
  verdadAlert: boolean = false;

  openModalEpisode() {
    this.verdadEpisode = true;
  }
  hideEpisodeModal() {
    this.verdadEpisode = false;
  }

  openModalCharacter() {
    this.verdadCaracter = true;
  }
  hideCaracterModal() {
    this.verdadCaracter = false;
  }

  openModalLocation() {
    this.verdadLocation = true;
  }
  hideLocationModal() {
    this.verdadLocation = false;
  }

  openModalAlert() {
    this.verdadAlert = true;
    setTimeout(() => {
      this.verdadAlert = false;
    }, 3500);
  }
  hideAlertModal() {
    this.verdadAlert = false;
  }
}
