# EAC3 — Programació Avançada (Angular) · IOC

Aquest projecte és la tercera entrega de l'assignatura **Programació Avançada (Angular)** de l'IOC. L'objectiu de l'EAC3 ha estat integrar serveis HTTP, gestionar estats amb Signals i construir formularis reactius avançats.

## Funcionalitats principals

- **Consum d'API Mock:** Connexió amb `json-server` per obtenir dades en temps real.
- **Cercador intel·ligent:** Formulari reactiu amb validacions síncrones i asíncrones, i optimització de peticions amb `debounceTime`.
- **Gestió de preferits:** Sistema de favorits amb persistència automàtica al `localStorage`.
- **Notes dinàmiques:** `FormArray` per afegir notes personals a cada element preferit, amb validació individual per camp.

## Detalls tècnics

### Serveis i reactivitat

- **Signals:** He gestionat els estats de càrrega, error i dades amb Signals de lectura/escriptura i valors `computed`.
- **Effects:** La sincronització amb el `localStorage` es fa automàticament mitjançant Angular Effects, sense guardats manuals.
- **Adaptadors:** He implementat mappers per desacoblar l'estructura de l'API del model intern de l'aplicació.

### Formularis avançats

- **Validació asíncrona:** Simulació d'una consulta a l'API amb un retard de 500ms per verificar la disponibilitat de dades.
- **`FormArray`:** Formularis dinàmics per gestionar les notes, amb possibilitat d'afegir i eliminar camps en temps d'execució.
- **UX/UI:** Botons de guardat amb estats visuals (actiu/desactivat) i efectes d'elevació CSS en fer hover.
