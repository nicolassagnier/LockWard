import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() element!: ElementCataleg;

  public preferitsServeis = inject(PreferitsService)

  togglePreferit(): void {
    if (this.preferitsServeis.esPreferit(this.element.id)) {
      this.preferitsServeis.eliminarPreferit(this.element.id);
    } else {
      this.preferitsServeis.afegirPreferit(this.element);
    }
  }
}
