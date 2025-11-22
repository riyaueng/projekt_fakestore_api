# 🛒 SuperFakeStore

Eine moderne Shop-Übersicht, die Produkte dynamisch aus einer externen API lädt und mit Filter-, Sortier- und Suchfunktionen anzeigt.

<img width="1848" height="844" alt="Bildschirmfoto 2025-11-22 um 17 32 39" src="https://github.com/user-attachments/assets/857fcbb6-77e8-4518-b270-4eaf90f29194" />

---

## 📋 Über das Projekt

SuperFakeStore ist ein Lernprojekt, das eine einfache Shop-Oberfläche mit dynamisch geladenen Produkten bereitstellt. Die Anwendung nutzt die FakeStore API, um realistische E-Commerce-Daten zu laden und bietet Nutzern verschiedene Interaktionsmöglichkeiten wie Filtern nach Kategorien, Sortieren nach Preis oder Bewertung sowie eine Live-Suche.

Das Projekt dient der Vertiefung von API-Integration, asynchroner Datenverarbeitung und interaktiver UI-Entwicklung mit TypeScript.

---

## 🛠️ Technologien

- **TypeScript** - Typisierte Entwicklung für bessere Wartbarkeit
- **Vite** - Modernes Build-Tool und Development Server
- **HTML5** - Struktur der Shop-Oberfläche
- **CSS3** - Styling und Layout
- **FakeStore API** - Externe Datenquelle für Produkte und Kategorien

---

## ✨ Features

- ✅ **API-Integration** - Live-Daten von der FakeStore API (`https://fakestoreapi.com`)
- ✅ **Dynamisches Rendering** - Produkte und Kategorien werden nach API-Call angezeigt
- ✅ **Kategorie-Filter** - Filterbuttons für verschiedene Produktkategorien
- ✅ **Sortierung** - Dropdown zur Sortierung nach Preis und Bewertung
- ✅ **Live-Suche** - Echtzeit-Suche nach Produkttiteln
- ✅ **Asynchrone Datenverarbeitung** - `fetch` und Promises für API-Calls
- ✅ **State Management** - Lokale Verwaltung der Produktdaten für Filter und Suche
- ✅ **Interaktive UI** - Event-Handler für alle Nutzerinteraktionen

---

## 📚 Was ich gelernt habe

- **API-Integration**: Anbindung externer APIs mit `fetch` und Verarbeitung von JSON-Daten
- **Asynchrone Programmierung**: Verwendung von `async/await` für saubere asynchrone Logik
- **TypeScript-Typisierung**: Erstellung von Type-Definitionen für API-Responses (TProducts, TRating)
- **DOM-Manipulation**: Dynamisches Erstellen und Aktualisieren von HTML-Elementen
- **Filter- und Sortierlogik**: Implementierung von Array-Methoden wie `.filter()`, `.sort()` und `.includes()`
- **Event-Handling**: Interaktive Buttons, Dropdowns und Suchfelder
- **State Management**: Verwaltung von Produktdaten als zentrale Datenquelle

---

## 🌐 API-Endpunkte

Die Anwendung nutzt folgende Endpunkte der FakeStore API:

- `GET /products` - Alle Produkte laden
- `GET /products/categories` - Alle Kategorien laden
- Weitere verfügbare Endpunkte können für zukünftige Features genutzt werden

---

## 🧩 Mögliche Erweiterungen

- [ ] Produktdetailseite mit mehr Informationen
- [ ] Warenkorb-Funktionalität mit Local Storage
- [ ] Pagination für große Produktlisten
- [ ] Preisfilter mit Range-Slider
- [ ] Bewertungsfilter (nur 4+ Sterne anzeigen)
- [ ] Favoriten-Liste
- [ ] Responsive Design für Mobile
- [ ] Loading-Skeleton während API-Call
- [ ] Error-Handling mit Fehlermeldungen
