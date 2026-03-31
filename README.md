# 3D Portfolio

Deutschsprachige Portfolio-Webseite mit Arbeiten aus dem 3., 4. und 5. Ausbildungsjahr.

## Live

GitHub Pages:

- <https://cmel2.github.io/3D-portfolio/>

## Inhalt

- statische Startseite ohne Build-Schritt
- horizontales Poster-Band als Einstieg
- Projektsektionen fuer das 3., 4. und 5. Jahr
- Bilder, Videos und OBJ-Download direkt aus den vorhandenen Assets

## Projektstruktur

```text
.
├── index.html
├── src
│   ├── data
│   │   └── projects.js
│   ├── main.js
│   └── modules
│       ├── marquee.js
│       ├── renderPortfolio.js
│       └── revealOnScroll.js
├── styles
│   ├── base.css
│   ├── components.css
│   └── layout.css
├── 3th year
├── 4th year
└── 5th year
```

## Lokal oeffnen

Die Seite funktioniert direkt ueber `index.html` und kann ohne lokalen Server geoeffnet werden.
