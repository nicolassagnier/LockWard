import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { ElementApiResponse, ElementCataleg } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/elements`;

  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null);

  elements = this._elements.asReadonly();
  carregant = this._carregant.asReadonly();
  error = this._error.asReadonly();

  obtenirPopulars(): void {
    this.executarPeticio(`${this.apiUrl}?popular=true`);
  }

  cercar(terme: string): void {
    this.executarPeticio(`${this.apiUrl}?nom_like=${terme}`);
  }

  private executarPeticio(url: string) {
    this._carregant.set(true);
    this._error.set(null);

    this.http.get<ElementApiResponse[]>(url).subscribe({
      next: (data) => {
        //Éxit.
        this._elements.set(adaptarElementsApi(data));
        this._carregant.set(false);
      },
      error: (err) => {
        //Error
        this._error.set("No s'han pogut carregar les dades. Torna-ho a intentar.");
        this._carregant.set(false);
      }
    });
  }
}
