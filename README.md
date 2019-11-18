# Tender
## Was ist Tender?
Projekt zur Vorlesung Webporgrammierung an der DHBW Karlsruhe
Tender ist eine Single Page App, auf der man das Rind, dessen Fleisch man kaufen
will auf gute alte "Social Media Manier" kennenlernen kann.
#TENDER - Nice to meat you!

## Anguar 8 | Material Design | firebase
Enthalten sind:
* [Angular 8](https://angular.io),
* [Material](https://material.io/) and
* [Firebase](https://firebase.google.com/).  
See also: [AngularMaterialGo](https://github.com/jeroenouw/AngularMaterialGo die genutzte Boilerplate für unsere Seite.

## Quick Start
First clone this repo: git clone https://github.com/theothies/Tender-Webprog. 
For Windows machines first install node-gyp Change directory to this project
Run ``` npm install ``` to install all the dependencies.
Run ``` npm start ``` to run this project. This will run with the AoT Compiler.
Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
Run npm reset if you want to re-install everything.

## Funktionen der Website
### /home
Man kann über die ```/home``` alle verfügbaren Rinder anschauen.
### /detail/id
Klickt man auf eines der Rinder so gelangt man auf die ```/detail/id``` Ansicht auf der man eine Beschreibung des Rindes vorfindet und dort sich ein bestimmtes Teil bestellen kann. Man gibt dazu das Gewicht in g(Bsp: 500) an und die Menge(Bsp: 2) und man sucht einen Radio Button raus, welches Stück Fleisch man bestellen möchte. Sobald man auf dem Knopf ```Zum Warenkorb hinzufügen``` klickt, landet die Bestellung in dem Warenkorb.  
### /cart
Zum Warenkorb ```/cart``` gelangt man über das Warenkorb-Symbol in der oberen rechten Ecke der Seite. Hier werden alle Bestellungen die man in den Warenkorb schiebt gespeichert und können entweder gelöscht werden, oder die Menge kann noch verändert werden. 
### /cowAdd
Hat man seinen eigenen Hof und möchte über die Web App sein eigenes Rind verkaufen, so kann man es über das Menü in der linken oberen Ecke der Seite auf ```Kuh hinzufügen``` klicken und gelangt dadurch auf die ```/cowAdd``` Seite.  
Auf dieser Seite kann man die Daten zu dem Rind das man hinzufügen möchte eingeben und man kann den Link zu einem Bild angeben (Bsp: https://ais.badische-zeitung.de/piece/0a/5d/e1/0a/173924618-h-720.jpg ). Klickt man auf den Knopf ```Hinzufügen``` kann man auf der Home Seite auch sein eigenes erstelltes Rind betrachten.

## Developer
* [robhringer](https://github.com/robhringer) - Robin Böhringer
* [Enes2802](https://github.com/Enes2802) - Enes Özdogan
* [theothies](https://github.com/theothies) - Theodor Thiessen

## Projektplan und Vorgehensweise
Folgende Ansichten sind Teil der Aufgabe:  
* Die Seite ```/addCow```, auf der es möglich ist eigene Rinder auf die Seite hochzuladen - Umgesetzt durch [theothies](https://github.com/theothies)
* Seite ```/detail/id``` Detail-/Einzelansicht von einem Rind, auf der man das für sich passende Stück Fleisch bestellen kann - Umgesetzt durch [Enes2802](https://github.com/Enes2802)
* Warenkorbseite ```/cart``` mit Inhalten, die man verändern und löschen kann   - Umgesetzt durch [robhringer](https://github.com/robhringer)
* Die Home/Gesamtübersichtseite ```/home```, sowie alle dazugehörigen CSS und JavaScript Dateien, wurden in Gruppenarbeit zusammen gelöst.

### Warum diese Aufteilung?
Jeder muss alle drei Bereiche CSS, HTML und JavaScript abdecken, weshalb jeder für eine Sicht verantwortlich ist, damit jeder alle Bereiche für die volle Punktzahl abdecken kann.

## Weitere Bemerkungen
* Der Grund warum [Enes2802](https://github.com/Enes2802) die meisten Zeilen Code commited hat ist, da er den Initial Commit für die meisten benötigten Dateien getätigt hat, auf denen wir dann zu dritt gearbeitet haben. Falls Interesse: Initial Commit:
```
commit bdae25985275ac8f9f8b86c653080949127712d8
```
