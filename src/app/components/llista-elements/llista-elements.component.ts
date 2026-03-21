import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DADES_MOCK } from '../../mocks/dades-mock';
import { Element } from '../../models/element.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [TargetaElementComponent, NgFor, BarraCercaComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  elements: Element[] = [...DADES_MOCK];
  elementsFiltrats: Element[] = [...DADES_MOCK];

  trackById(index: number, element: Element): number {
    return element.id;
  }

  onCerca(text: string) {
    if (text.trim() === '') {
      this.elementsFiltrats = this.elements;
    } else {
      this.elementsFiltrats = this.elements.filter(element =>
        element.nom.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
