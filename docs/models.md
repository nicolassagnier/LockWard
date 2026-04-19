# Documentació de Models (EAC3)

Aquest document descriu les estructures de dades que he fet servir per garantir una comunicació segura i tipada entre l'API externa (`json-server`) i la interfície d'usuari.

## 1. Interfícies TypeScript

He definit dues interfícies principals al fitxer `src/app/models/element.model.ts`:

- **`ElementApiResponse`:** Representa l'estructura original de les dades tal com arriben del servidor. Els noms dels camps coincideixen amb els del fitxer `db.json`.
- **`ElementCataleg`:** És el model intern de l'aplicació. Els camps els he adaptat al català i tipat segons el que necessita la interfície.

## 2. Taula de mapeig de camps

Aquí es pot veure la correspondència entre els camps de l'API i els del model intern:

| `ElementApiResponse` | `ElementCataleg` | Tipus |
| :--- | :--- | :--- |
| `id` | `id` | `string` |
| `nom` | `titol` | `string` |
| `descripcio` | `descripcio` | `string` |
| `categoria` | `categoria` | `string` |
| `preu` | `preu` | `number` |
| `imatge` | `imatgeUrl` | `string` |
| `popular` | `esPopular` | `boolean` |
| `stock` | `unitats` | `number` |
| *(Opcional)* | `notes` | `string[]` |

> **Nota:** El camp `notes` l'he afegit a l'Exercici 5 per permetre la persistència de comentaris personalitzats en els elements preferits.

## 3. Adaptadors de dades

Per fer la transformació entre les dues estructures, he implementat funcions adaptadores al fitxer `src/app/adaptadors/element.adaptador.ts`:

- **`adaptarElementApi`**: Rep un objecte de tipus `ElementApiResponse` i retorna un objecte de tipus `ElementCataleg` amb els camps mapejats.
- **`adaptarElementsApi`**: Transforma un array complet d'elements fent servir la funció anterior i el mètode `.map()`.

L'avantatge d'aquesta arquitectura és que si l'API canvia en el futur només hauré de tocar el fitxer de l'adaptador i res més.