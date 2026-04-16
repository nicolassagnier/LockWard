import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; //pipes
import { ElementService } from '../../services/element.service';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { FormulariCercaComponent } from '../formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [TargetaElementComponent, FormulariCercaComponent, CommonModule],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  public elementService = inject(ElementService);

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  onCerca(text: string) {
    this.elementService.cercar(text);
  }
}



