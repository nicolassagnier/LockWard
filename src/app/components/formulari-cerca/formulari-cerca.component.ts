import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, delay, of, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ElementService } from '../../serveis/element.service';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent implements OnInit{
  //Dependències
  private fb = inject(FormBuilder)
  private elementService = inject(ElementService)
  private destroyRef = inject(DestroyRef)

  //Formulari
  cercaForm: FormGroup = this.fb.group({
    tCerca: ['', 
      [Validators.minLength(2), Validators.maxLength(50)],  //Validador síncron
      [this.codiDisponibleValidator.bind(this)]             //Validador asíncron
    ]
  });

  ngOnInit(): void {
    //Debounce de 400ms
    this.cercaForm.get('tCerca')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef) //neteja subscripcio
    ).subscribe(valor => {
      //si el formulari es valid cerquem...
      if (!this.tControl?.errors?.['minlength'] && !this.tControl?.errors?.['maxlength']) {
        this.elementService.cercar(valor);
      }
    });
  }

  //Validar asíncron, consulta API 500ms retard. AbstractControl - l'usuari escriu allà.
  codiDisponibleValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    //si el camp és buit no cal validar res
    if (!control.value) return of(null); 
    //si el camp té algun valor posem un retard
    return of(control.value).pipe(
      delay(500),
      map(valor => {
        //prova
        const existeixenResultats = valor.toLowerCase() !== 'buit';
        //if valid null, else senseResultats
        return existeixenResultats ? null : { senseResultats: true };
      })
    );
  }

  //Botó netejar 
  netejarCerca(): void {
    this.cercaForm.get('tCerca')?.setValue('');
    this.elementService.obtenirPopulars();
  }

  //helper
  get tControl() {
    return this.cercaForm.get('tCerca');
  }
}
