import { Element } from '../models/element.model';

export const DADES_MOCK: Element[] = [
    {
        id: 1,
        nom: 'Gmail',
        usuari: 'usuari@gmail.com',
        contrasenya: 'aB3#kL9@mN2!',
        categoria: 'Personal',
        seguretat: 95,
        longitud: 12,
        dataCreacio: '2025-03-10',
        url: 'gmail.com'
    },
    {
        id: 2,
        nom: 'Github',
        usuari: 'usuari_github',
        contrasenya: 'Af!kt9#4kL@2pQ8!',
        categoria: 'Feina',
        seguretat: 98,
        longitud: 16,
        dataCreacio: '2025-05-11',
        url: 'github.com'
    },
    {
        id: 3,
        nom: 'Netflix',
        usuari: 'usuari@netflix.com',
        contrasenya: 'B7@07ns!Kp5#',
        categoria: 'Entreteniment',
        seguretat: 80,
        longitud: 12,
        dataCreacio: '2025-07-15',
        url: 'netflix.com'
    },
    {
        id: 4,
        nom: 'Spotify',
        usuari: 'usuari@spotify.com',
        contrasenya: 'jK5#098CL!2@rT',
        categoria: 'Entreteniment',
        seguretat: 84,
        longitud: 14,
        dataCreacio: '2025-08-19',
        url: 'spotify.com'
    },
    {
        id: 5,
        nom: 'Amazon',
        usuari: 'usuari@amazon.com',
        contrasenya: 'Rn!9@20cT#4LmP6@wQ',
        categoria: 'Personal',
        seguretat: 99,
        longitud: 18,
        dataCreacio: '2025-09-21',
        url: 'amazon.com'
    },
    {
        id: 6,
        nom: 'Instagram',
        usuari: 'usuari_instagram',
        contrasenya: 'pQ2!8mW#vX5@',
        categoria: 'Personal',
        seguretat: 97,
        longitud: 12,
        dataCreacio: '2025-10-24',
        url: 'instagram.com'
    },
    {
        id: 7,
        nom: 'X',
        usuari: 'usuari_x',
        contrasenya: 'hJ6@3nR!9kT#',
        categoria: 'Personal',
        seguretat: 97,
        longitud: 12,
        dataCreacio: '2025-11-27',
        url: 'x.com'
    },
    {
        id: 8,
        nom: 'LinkedIn',
        usuari: 'usuari@linkedin.com',
        contrasenya: 'wL4#7bN@2mP!kR9@',
        categoria: 'Feina',
        seguretat: 97,
        longitud: 16,
        dataCreacio: '2025-12-29',
        url: 'linkedin.com'
    },
    {
        id: 9,
        nom: 'Paypal',
        usuari: 'usuari@paypal.com',
        contrasenya: 'zX8!5qM@3vK#9nT!2pL@',
        categoria: 'Bancs',
        seguretat: 100,
        longitud: 20,
        dataCreacio: '2026-01-03',
        url: 'paypal.com'
    },
    {
        id: 10,
        nom: 'Microsoft',
        usuari: 'usuari@microsoft.com',
        contrasenya: 'tG9@4hD!7nQ#mK2!',
        categoria: 'Feina',
        seguretat: 97,
        longitud: 16,
        dataCreacio: '2026-02-05',
        url: 'microsoft.com'
    }
];

// Hi han apps que permeten iniciar sessio amb usuari o gmail contrasenyes han de ser generades amb: 
// · majuscules, · minuscules, · numeros, · caracters especials, · longitud minima: 12 caracters.

// Tipus de categories:
// · Persona, · Feina, · Entreteniment, · Bancs

// Serveis més utilitzats i coneguts:
// · Gmail, · Github, · Netflix, · Spotify, · Amazon, · Instagram, · X, · LinkedIn, · Paypal, · Microsoft.

// Url: opcional, pot obrir: 
// gmail.com, github.com, netflix.com...