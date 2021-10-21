### Oktober 2021
# Programmering 1
## Projektuppgift *Ursula Vallejo Janne*
### Content Innehåller:

- [1. General Projektplan](#1-general-projektplan-)
- [2. Dokumentation](#2-dokumentation--)
    - [Steg 1: HTML](#steg-1-html)
    - [Steg 2: CSS](#steg-2-css)
    - [Steg 3: JS](#steg-3-js)
    - [Steg 4: Beskrivning](#steg-4-beskrivning)
    - [Steg 5: konklusionen](#steg-5-konklusionen)
    - [Steg 6: övriga](#steg-6-vriga)
  
- [3.Uppgifter Info](#3-uppgifter-info)

# 1. General Projektplan :

Du kan se mitt projektplan i länken nedan:

[Trello Webbsida ](https://trello.com/invite/b/Z3Nuvnwx/986973450a0dfb68d65c026a87d672d2/programmering-1)

# 2. Dokumentation  :

## Steg 1: HTML

- search images cd, shoppingcart and logo (photoshop background transparent)
- create layout : semanstisc sections
- difficultad al poner el carrito y centrar el head
- logo css?
- centrar head con main. opte por hacer un marco externo para centrat todo. tomado del libro pg 325 (trabajar con boxes)
- item (cd) con un flexbox
- cada item en un span para incluir toda la informacion de cada articulo separada.

## Steg 2: CSS

## Steg 3: JS

-crear un diagrama para entender las funciones deben existir en la pagina.

- crear pasos a seguir
- orden de accion:   
1 crear el dropdown menu ( como cambiar el tamano de este)

## Steg 4: Beskrivning

## Steg 5: konklusionen

## Steg 6: övriga

## 3. Uppgifter Info

### Frågeställningen

Hur kan vi göra en kundkorg som uppdateras.

### Mål

I detta projekt ska ni göra en enkel hemsida där man kan lägga album man vill köpa i en kundkorg. Man ska kunna
uppdatera antalet album samt att när en viss summa nås får man fri frakt.

### Avgränsning

HTML och CSS för det grafiska gränssnittet och Vanilla JavaScript för funktionaliteten. Dvs ingen:

- JQuery
- Media Queries (Frivilligt)
- JavaScript Frameworks

### Syfte

Att ni ska lära er vad JavaScript tillför för funktionalitet samt vilket möjligheter det ger för programutveckling.

### Vad ska ni leverera?

En applikation med en kundkorg, där man ska kunna

- Visa vilka album som finns
- Lägga till album i en kundkorg
- Ta bort album i en kundkorg
- Uppdatera antalet album i en kundkorg

### Lägg till varor i kundkorgen

![](img/1.png)

### Funktioner som ska finnas

- När användaren ändrar antalet album så ska summan uppdateras med en gång.

- Det ska inte vara möjligt att skriva in felaktiga värden så som negativa värden i "antalet album boxarna".

- Kundkorgen ska vara tillgänglig från bilden på en kundkorg samt knappen "Checkout".

- Om ordern är på mer än 259kr (eller lika med) så ska det vara fri frakt. Om summan för fri frakt inte uppnåtts så visa
  hur långt (skillnaden) det är kvar till fri frakt:

![](img/2.png)