import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferitsService } from '../../serveis/preferits.service';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-preferits-panell',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panell.component.html',
  styleUrl: './preferits-panell.component.scss'
})
export class PreferitsPanellComponent implements OnInit {
  public preferitsServeis = inject(PreferitsService);
  private fb = inject(FormBuilder);

  public estatObert = signal(false);

  public notesForm: FormGroup = this.fb.group({
    llistesNotes: this.fb.group({}) 
  });

  ngOnInit(): void {
    // crea formulari per als preferits guardats
    this.preferitsServeis.preferits().forEach(p => {
      this.crearFormArrayPerElement(p);
    });
  }

  togglePanell(): void {
    this.estatObert.update(estat => !estat);
  }

  // Metode per crear FormArray
  crearFormArrayPerElement(element: any): void {
    const llistes = this.notesForm.get('llistesNotes') as FormGroup;
    
    // Crear els controls amb les notes que ja tingui o buit
    const controls = (element.notes || []).map((n: string) => 
      this.fb.control(n, [Validators.required, Validators.minLength(3)])
    );

    const nouArray = this.fb.array(controls);
    llistes.addControl(element.id, this.fb.array(controls));
  }

  // Metodes 
  getNotesArray(id: string): FormArray {
    const llistes = this.notesForm.get('llistesNotes') as FormGroup;

    // si la id no existeix
    if (!llistes.contains(id)) {
      // mirar si tenia alguna nota guardada
      const element = this.preferitsServeis.preferits().find(p => p.id === id);
      if (element) {
        this.crearFormArrayPerElement(element);
      }
    }
    return llistes.get(id) as FormArray;
  }

  afegirNota(id: string): void {
    this.getNotesArray(id).push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
  }

  eliminarNota(id: string, index: number): void {
    this.getNotesArray(id).removeAt(index);
    this.preferitsServeis.actualitzarNotes(id, this.getNotesArray(id).value);
  }

  guardarNotes(id: string): void {
  const llistaNotes = this.getNotesArray(id);
  
    if (llistaNotes.valid) {
      // l'usuari tria si guardar o no
      this.preferitsServeis.actualitzarNotes(id, llistaNotes.value);
      console.log("Notes guardades correctament");
    }
  }
  // identificar element pel seu ID
  trackByItem(index: number, item: any): string {
    return item.id;
  }

  // identificar notes per la seva posició
  trackByNota(index: number, item: any): number {
    return index;
  }
}
