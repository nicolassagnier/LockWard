import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';
import { NgIf, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common'

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [NgIf, DatePipe, DecimalPipe, UpperCasePipe],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input() element!: Element;
}
