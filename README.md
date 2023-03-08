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
* Werden mehrere Werte in einer Komponente für einen State benötigt, kann ein Objekt in **useState** übergeben werden, um diese zusammengehörigen Werte zu gruppieren
* Gruppiert man den State, muss beim Aktualisieren des States darauf geachtet werden, dass die anderen Attributs-Werte mit dem Spread-Operator übernommen werden

```typescript
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });
  ...
  setUserInput((prevState) => {
    return {
      ...prevState,
      enteredTitle: event.target.value
    };
  });
```

## Auf User-Eingaben reagieren
* Durch das onChange Event z.B. auf einem Input kann man eine Funktion angeben, an das Input den neuen Wert weiterleitet
* Two-Way-Binding wird über das value-Attribut eines Input-Elements geregelt

## Kommunikation von Child-Component zu Parent-Component
* Diese Art an Kommunikation wird per Eventhandling gesteuert
* Der Eventhandler wird von der einbindenden Komponente als Prop an die Child-Component weitergegeben
* Der Eventhandler wird dann an der entsprechenden Stelle in der Child-Component über die Props ausgeführt

**Elternkomponente**
```html
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
```
**Kindkomponente**
```typescript
const submitHandler = (event: any) => {
  const expenseData: Expense = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
  props.onSaveExpenseData(expenseData);
};
```