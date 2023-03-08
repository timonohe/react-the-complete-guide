# React Complete Guide
Hier wird zusammengefasst in Stichpunkten alle Konzepte von React.js aufgeführt

# Nützliche Tools
* React Devtools

# React Basics
## Projekt-Struktur verinnerlichen
* main.tsx
* Einstiegs-Skript, welches die Eingangs-Komponente lädt
* ReactDOM.createRoot(...)
* app.tsx
* Definiert die App-Komponente
* JSX
* JavaScript XML
* Syntax zum Definieren der Komponenten

## Erstellen einer Komponente
* Definieren einer Komponente
* Eine Komponente darf nur ein Root-Element haben
* Einbinden von Komponenten

## Stylen einer Komponente
* Import der (S)CSS Datei in der tsx-Datei
* Klassen an HTML-Elementen mit "className" definieren anstelle von "class"

## Dynamischen Content anzeigen
* Variablen/Konstanten können dynamisch in HTML-Elementen mit {} verwendet werden
* mit "props" können Objekte an Komponenten dynamisch übergeben werden
* Props werden an die einzubindende Komponente jeweils mit einem Attribut und dem Wert innerhalb einer {}-Klammer übergeben
* Props werden in der einzubindenden Komponente als Parameter definiert (ein Parameter für alle Props zusammen)
* Content zwischen dem öffnenden und schließenden Tag wird ebenso als Parameter übergeben (props.children)
* Klassen einer eingebundenen Wrapper-Komponente werden mit *props.className* übergeben und müssen explizit im Root-Element der Komponente eingetragen werden

# User Interaktionen & State einer Anwendung
* Mit React hat man Zugriff auf jedes Event eines **nativen** HTML-Elements (z.B. onClick)
* Funktionen können über diese Event-Listener angesprochen werden

## useState
* Ändert sich der Content einer Komponente muss der Hook **useState** ausgeführt werden, damit diese angezeigt werden
* useState bekommt eine Variable übergeben, die sich zur Laufzeit ändern kann/soll
* Über Array-Destructuring bekommt man Zugriff auf den Wert des aktuellen Variablen-States sowie des dazugehörigen Setters
* Das Ausführen des jeweiligen Setters führt dazu, dass die darunterliegende Komponente vollständig neu gerendert/ausgewertet wird
* Jede Komponente besitzt seinen eigenen State
* **useState** kann mehrmals für verschiedene Attribute/Variablen aufgerufen werden

## Auf User-Eingaben reagieren
* Durch das onChange Event z.B. auf einem Input kann man eine Funktion angeben, an das Input den neuen Wert weiterleitet