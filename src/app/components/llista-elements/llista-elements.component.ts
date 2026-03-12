import { Component } from '@angular/core';
import { DADES_MOCK } from '../../mocks/dades-mock';
import { Element } from '../../models/element.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [TargetaElementComponent, NgFor],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  elements: Element[] = DADES_MOCK;
  elementsFiltrats: Element [] = DADES_MOCK;
}
