# React Complete Guide

## Nützliche Tools
1. React Devtools

## React Basics
### Neues React-Projekt erstellen

### Projekt-Struktur verinnerlichen
--> main.tsx<br/>
---> Einstiegs-Skript, welches die Eingangs-Komponente lädt<br/>
---> ReactDOM.createRoot(...)<br/>
--> app.tsx<br/>
---> Definiert die App-Komponente<br/>

-> JSX<br/>
--> JavaScript XML<br/>
--> Syntax zum Definieren der Komponenten

### Erstellen einer Komponente
--> Definieren einer Komponente<br/>
---> Eine Komponente darf nur ein Root-Element haben<br/>
--> Einbinden von Komponenten

### Stylen einer Komponente
--> Import der (S)CSS Datei in der tsx-Datei<br/>
--> Klassen an HTML-Elementen mit "className" definieren anstelle von "class"

### Dynamischen Content anzeigen
--> Variablen/Konstanten können dynamisch in HTML-Elementen mit {} verwendet werden<br/>
--> mit "props" können Objekte an Komponenten dynamisch übergeben werden
--> Props werden an die einzubindende Komponente jeweils mit einem Attribut und dem Wert innerhalb einer {}-Klammer übergeben
--> Props werden in der einzubindenden Komponente als Parameter definiert (ein Parameter für alle Props zusammen)