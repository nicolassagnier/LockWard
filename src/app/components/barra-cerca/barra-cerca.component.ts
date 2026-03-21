import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  @Output() cercaCanviada = new EventEmitter<string>();
  textCerca: string = '';

  onCerca() {
    this.cercaCanviada.emit(this.textCerca);
  }
}
