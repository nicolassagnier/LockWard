import { ElementApiResponse, ElementCataleg } from '../models/element.model';

export function adaptarElementApi(api: ElementApiResponse): ElementCataleg {
    return {
        id: api.id,
        titol: api.nom,
        descripcio: api.descripcio,
        categoria: api.categoria,
        preu: api.preu,
        imatgeUrl: api.imatge,
        esPopular: api.popular,
        unitats: api.stock,
        usuari: api.usuari,
        longitud: api.longitud,
        dataCreacio: api.dataCreacio,
        url: api.url
    };
}

export function adaptarElementsApi(apis: ElementApiResponse[]): ElementCataleg[] {
    return apis.map(adaptarElementApi);
}