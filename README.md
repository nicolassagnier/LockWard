# LockWard - Nicolás Sagnier Fernández de Castro

## Descripció
LockWard és un gestor de credencials desenvolupat amb Angular i C# on les contrasenyes es xifren en el navegador de l'usuari abans de ser enviades al servidor. Les dades es guardaran a MariaDB i només el propietari podrà recuperar i desxifrar la seva informació.

## Stack Tècnic
Aquest projecte serà desenvolupat per aquestes tecnologies:

**Frontend**
- Angular
- Cifratge AES-256

**Backend**
- ASP.NET Core Web API
- Json Web Tokens

**Base de dades**
- MariaDB

**Connexió de la API a MariaDB**
- Pomelo

## Estat del projecte
Unitat 2 - Components i formularis completat

- Model de dades "Element" amb TypeScript
- Dades mock amb 10 credencials 
- Components targeta-element, llista-elements i barra-cerca
- Comunicació pare-fill amb @Input i @Output
- Cerca en temps real amb `[(ngModel)]` i validació minlength=3
- Directives *ngFor amb trackBy i *ngIf per gestionar estats
- Pipes uppercase, date i number
- Disseny responsive 1/2/3 amb CSS Grid i auto-fill minmax (adaptar llista a pantalla)
- Spinner de càrrega amb @keyframes
- Accessibilitat amb atributs ARIA i labels, aria-describedby per lectors de pantalla, skip link invisible, prefers-reduced-motion i tabindex="0" per navegar per les targetes amb Tab.
