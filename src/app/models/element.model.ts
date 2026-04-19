export interface ElementApiResponse {
    id: string;
    nom: string;
    descripcio: string;
    categoria: string;
    preu: number;
    imatge: string;
    popular: boolean;
    stock: number;
    usuari?: string;
    longitud?: number;
    dataCreacio?: string;
    url?: string;
}

export interface ElementCataleg {
    id: string;
    titol: string;      
    descripcio: string;
    categoria: string;
    preu: number;        
    imatgeUrl: string;  
    esPopular: boolean; 
    unitats: number;    
    usuari?: string;
    longitud?: number;
    dataCreacio?: string;
    url?: string;
    notes?: string[];   
}