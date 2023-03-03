# React Complete Guide

## Nützliche Tools
* React Devtools

## React Basics
### Neues React-Projekt erstellen

### Projekt-Struktur verinnerlichen
* main.tsx
* Einstiegs-Skript, welches die Eingangs-Komponente lädt
* ReactDOM.createRoot(...)
* app.tsx
* Definiert die App-Komponente
* JSX
* JavaScript XML
* Syntax zum Definieren der Komponenten

### Erstellen einer Komponente
* Definieren einer Komponente
* Eine Komponente darf nur ein Root-Element haben
* Einbinden von Komponenten

### Stylen einer Komponente
* Import der (S)CSS Datei in der tsx-Datei
* Klassen an HTML-Elementen mit "className" definieren anstelle von "class"

### Dynamischen Content anzeigen
* Variablen/Konstanten können dynamisch in HTML-Elementen mit {} verwendet werden
* mit "props" können Objekte an Komponenten dynamisch übergeben werden
* Props werden an die einzubindende Komponente jeweils mit einem Attribut und dem Wert innerhalb einer {}-Klammer übergeben
* Props werden in der einzubindenden Komponente als Parameter definiert (ein Parameter für alle Props zusammen)
* Content zwischen dem öffnenden und schließenden Tag wird ebenso als Parameter übergeben (props.children)
* Klassen einer eingebundenen Wrapper-Komponente werden mit *props.className* übergeben und müssen explizit im Root-Element der Komponente eingetragen werden