import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Output() cambioAlert: EventEmitter<boolean> = new EventEmitter();
  modal() {
    this.cambioAlert.emit();
  }
}
