# Documentació de Models (EAC3)

Taula de mapeig de camps entre l'API (json-server) i el model intern de l'aplicació:

| ElementApiResponse | ElementCataleg | Tipus |
| :--- | :--- | :--- |
| `id` | `id` | `string` |
| `nom` | `titol` | `string` |
| `descripcio` | `descripcio` | `string` |
| `categoria` | `categoria` | `string` |
| `preu` | `preu` | `number` |
| `imatge` | `imatgeUrl` | `string` |
| `popular` | `esPopular` | `boolean` |
| `stock` | `unitats` | `number` |