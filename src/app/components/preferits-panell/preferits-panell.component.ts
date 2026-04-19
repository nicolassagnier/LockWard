import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-preferits-panell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preferits-panell.component.html',
  styleUrl: './preferits-panell.component.scss'
})
export class PreferitsPanellComponent {
  public preferitsServeis = inject(PreferitsService)

  public estatObert = signal(false);

  togglePanell(): void {
    this.estatObert.update(estat => !estat);
  }
}
