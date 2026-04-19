import { Injectable, signal, computed, effect } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly CLAU_STORAGE = 'cataleg-preferits';
  private _preferits = signal<ElementCataleg[]>(this.loadDadesLocalStorage());

  public preferits = this._preferits.asReadonly();
  public totalPreferits = computed(() => this._preferits().length);


  constructor() { 
    effect(() => {
      this.guardarDadesLocalStorage(this._preferits()); 
    })
  }

  afegirPreferit(element: ElementCataleg): void {
    if (!this.esPreferit(element.id)) {
      this._preferits.update(llista => [...llista, element]);
    }
  }

  eliminarPreferit(id: string): void {
  this._preferits.update(llista => llista.filter(e => e.id !== id));
  }

  esPreferit(id: string): boolean {
    return this._preferits().some(e => e.id === id);
  }

  private guardarDadesLocalStorage(elements: ElementCataleg[]): void {
    try{
      localStorage.setItem(this.CLAU_STORAGE, JSON.stringify(elements));
    }
    catch (e) {
      console.error("No s'ha pogut guardar al localStorage", e);
    }
  }

  private loadDadesLocalStorage(): ElementCataleg[] {
    try {
      const dades = localStorage.getItem(this.CLAU_STORAGE)
      return dades ? JSON.parse(dades) : [];
    }
    catch (e) {
      console.error("No s'ha pogut carregar del localStorage", e);
      return [];
    }
  }

  //busca l'element per la seva id en l'array de notes, si el troba canvia 
  //les notes i actualitza.
  actualitzarNotes(id: string, novesNotes: string[]): void {
    this._preferits.update(llista => 
      llista.map(item => item.id === id ? { ...item, notes: novesNotes } : item)
    );
  }
}

