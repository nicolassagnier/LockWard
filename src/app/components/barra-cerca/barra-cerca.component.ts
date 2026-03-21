import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  @Output() cercaCanviada = new EventEmitter<string>();

  onCerca(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cercaCanviada.emit(input.value);
  }
}
