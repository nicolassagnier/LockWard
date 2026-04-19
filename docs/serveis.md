# Documentació de Serveis (EAC3)

L'arquitectura de l'aplicació utilitza dos serveis principals que he implementat per gestionar el flux de dades de forma reactiva utilitzant **Signals**.

## 1. `ElementService` (Gestió HTTP i API)

Aquest servei s'encarrega de tota la comunicació amb l'API externa (`json-server`)  a `http://localhost:3000`.

### Característiques tècniques

- **`HttpClient`:** Faig servir el mòdul `provideHttpClient` per realitzar peticions asíncrones.
- **Gestió d'estats:** He implementat tres **Signals** privats per controlar el fluxe de les peticions:
  - `_elements`: Guarda la llista de dades transformades.
  - `_carregant`: Bool que indica si hi ha una petició en curs (per mostrar l'spinner).
  - `_error`: Guarda el missatge d'error si la comunicació falla.
- **Encapsulament:** Exposo les propietats mitjançant `.asReadonly()`, perque els components no puguin modificar l'estat directament.

### Mètodes principals

- **`obtenirPopulars()`**: Fa una petició `GET` filtrant els elements amb el paràmetre `popular=true`.
- **`cercar(terme: string)`**: Utilitza el paràmetre `nom_like` de l'API per filtrar els elements segons el text introduït per l'usuari.

---

## 2. `PreferitsService` (Persistència i LocalStorage)

Aquest servei gestiona la llista d'elements marcats com a preferits i les seves notes personals, fent que tot es mantingui entre sessions.

### Característiques tècniques

- **`localStorage`:** Faig servir l'API d'emmagatzematge del navegador amb la clau `cataleg-preferits`.
- **Sincronització amb Effects:** He posat un **Angular Effect** al constructor que vigila els canvis en el Signal de preferits. Quan en detecta un, guarda la llista actualitzada al `localStorage` de forma automàtica.
- **Dades reactives:**
  - `preferits`: Signal amb la llista actual d'elements preferits.
  - `totalPreferits`: Valor **computed** que es recalcula sol quan canvia la longitud de la llista.

### Mètodes principals

- **`afegirPreferit(element)` / `eliminarPreferit(id)`**: Modifiquen la llista de preferits assegurant que no hi hagi duplicats.
- **`actualitzarNotes(id, notes)`**: Desa les notes creades amb el `FormArray`. Busca l'element per ID i actualitza la propietat `notes` de forma immutable.
- **Gestió d'errors:** Tots els accessos al `localStorage` van dins de blocs `try/catch` per si l'emmagatzematge està desactivat o ple.