import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [NgIf],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() element!: Element;
}
