import { Component } from '@angular/core';
import { LlistaElementsComponent } from "./components/llista-elements/llista-elements.component";
import { PreferitsPanellComponent } from "./components/preferits-panell/preferits-panell.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LlistaElementsComponent, PreferitsPanellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LockWard';

  constructor() {
    console.log('Aplicacio LockWard iniciada');
  }
}

