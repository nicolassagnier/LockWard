# Documentació de Formularis

Aquest projecte fa servir el mòdul **ReactiveFormsModule** d'Angular per gestionar i validar la interacció amb l'usuari.

## Formulari de Cerca (`FormulariCercaComponent`)

Aquest component permet filtrar els elements del catàleg en temps real amb un camp de text amb validacions avançades.

### Validadors Implementats

Hi ha tres tipus de validacions per al camp `termeCerca`:

*   **Síncrons (Angular Core):**
    *   `Validators.minLength(2)`: S'assegura que l'usuari escrigui com a mínim dos caràcters abans de cercar per evitar resultats genèrics.
    *   `Validators.maxLength(50)`: Limita l'entrada de text a 50 caràcters màxim.
*   **Asíncron (`codiDisponibleValidator`):**
    *   Simula una consulta a una API externa per verificar si existeix el terme o la disponibilitat d'aquest.
    *   Fa servir l'operador `delay(500)` de RxJS per simular un retràs.
    *   Retorna l'error `{ senseResultats: true }` si el terme no compleix les condicions de cerca (simulació).

### Comportament i Optimització (Debounce)

Per millorar l'experiència de l'usuari i el rendiment de l'aplicació s'han aplicat aquestes tècniques de RxJS sobre el flux de dades del formulari:

1.  **Debounce Time (400 ms):** L'aplicació espera 400 ms des de l'última tecla abans d'executar la cerca, per no saturar el servidor `json-server` amb peticions innecessàries mentre l'usuari escriu.
2.  **Distinct Until Changed:** Evita cerques duplicades si el valor del camp no ha canviat realment (per exemple, si l'usuari prem *Shift* o *Alt*).
3.  **Gestió d'Estats Visuals:**
    *   **Estat PENDING:** Mentre el validador asíncron treballa, es mostra "Validant..." a la interfície.
    *   **Estat TOUCHED:** Els missatges d'error només apareixen quan l'usuari ja ha interactuat amb el camp (`touched`) per no mostrar alertes vermelles quan no toca.