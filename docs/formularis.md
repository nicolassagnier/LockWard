# Documentació de Formularis

Aquest projecte fa servir el mòdul **ReactiveFormsModule** d'Angular per gestionar la interacció amb l'usuari i les seves validacions.

## Formulari de Cerca (`FormulariCercaComponent`)

Aquest component permet filtrar els elements del catàleg en temps real mitjançant un camp de text amb diverses validacions.

### Validadors Implementats

El camp `termeCerca` té tres tipus de validació:

**Síncrons (Angular Core)**

- `Validators.minLength(2)`: Requereix com a mínim dos caràcters per evitar cerques massa genèriques.
- `Validators.maxLength(50)`: Limita l'entrada a 50 caràcters.

**Asíncron (`codiDisponibleValidator`)**

- Simula una consulta a una API externa per verificar si el terme cercat és vàlid o disponible.
- Fa servir l'operador `delay(500)` de RxJS per simular el retràs de la petició.
- Retorna l'error `{ senseResultats: true }` quan el terme no compleix les condicions (simulació).

### Comportament i Optimització (Debounce)

Per millorar l'experiència d'ús i el rendiment, he aplicat algunes tècniques de RxJS sobre el flux de dades del formulari:

**Debounce Time (400 ms)**

L'aplicació espera 400 ms des de l'última tecla premuda abans de llançar la cerca. Així s'evita bombardejar el `json-server` amb peticions mentre l'usuari encara està escrivint.

**Distinct Until Changed**

Evita cerques duplicades quan el valor del camp no ha canviat realment (per exemple, en prémer *Shift* o *Alt*).

**Gestió d'estats visuals**

- **Estat `PENDING`:** Mentre el validador asíncron és en curs, es mostra el missatge *"Validant..."* a la interfície.
- **Estat `TOUCHED`:** Els missatges d'error només apareixen un cop l'usuari ha interactuat amb el camp, per no mostrar alertes innecessàries des del principi.

---

## Notes dels preferits (`FormArray`)

Aquest component permet que cada element guardat com a preferit tingui la seva pròpia llista de notes personals.

**Llistes dinàmiques amb `FormArray`**

He fet servir `FormArray` perquè l'usuari pugui afegir tants camps de text com necessiti amb el botó *"+ Afegir nota"*. Cada nota funciona com un control independent amb una validació mínima de **3 caràcters**.

**Botó de guardar (check verd)**

He creat un botó manual per confirmar el guardat al servei. Es manté desactivat (en gris) en els casos següents:

- La llista de notes és buida.
- Alguna nota no arriba al mínim de caràcters.
- No hi ha cap canvi nou respecte al que ja estava guardat.

**Optimització del focus amb `trackBy`**

He fet servir la funció `trackByNota` per ajudar Angular a identificar cada camp de text de forma estable. Això evita que el cursor salti fora de l'input quan el formulari canvia d'estat en escriure el tercer caràcter.

**Persistència automàtica**

Quan es confirma el guardat, les dades es sincronitzen amb el `PreferitsService`, que s'encarrega de mantenir-les al `localStorage`. D'aquesta manera la informació no es perd en recarregar la pàgina.