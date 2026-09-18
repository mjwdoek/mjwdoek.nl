# maartendoek.nl

Statische site (GitHub Pages) — thuisbasis van de apps van Maarten Doek, met
per-app privacybeleid en gebruiksvoorwaarden. Tweetalig (NL/EN) via een
taalknop rechtsboven.

## Structuur

```
/                              Hub / startpagina (index.html)
/aanm-de-podcast/              App-landing — Aan'm de Podcast
/aanm-de-podcast/privacy/      Privacybeleid (eigen stijl)
/aanm-de-podcast/voorwaarden/  Gebruiksvoorwaarden (eigen stijl)
/gardenalerts/                 App-landing — GardenAlerts
/gardenalerts/privacy/         Privacybeleid (eigen stijl)
/ff-soundboard/                App-landing — FF Soundboard
/ff-soundboard/privacy/        Privacybeleid (eigen stijl)
/homepage/                     Redirect naar / (oude Google Sites-URL)
/404.html                      Nette 404
/assets/site.css               Gedeeld ontwerp voor hub + app-landingen
/assets/site.js                Taalwissel NL/EN
CNAME                          maartendoek.nl
.nojekyll                      Schakelt Jekyll-verwerking uit
```

## Behoud van bestaande URL's

De privacy- en voorwaarden-pagina's van de oude Google Sites-site blijven
werken. GitHub Pages serveert `map/index.html` op `/map/` en stuurt `/map`
door naar `/map/`. Behouden paden:

- `/aanm-de-podcast/privacy`
- `/aanm-de-podcast/voorwaarden`
- `/gardenalerts/privacy`
- `/ff-soundboard/privacy`
- `/aanm-de-podcast`, `/gardenalerts`, `/ff-soundboard`
- `/homepage` (redirect naar `/`)

## Ontwerp

- **Hub + app-landingen**: uniform, donker thema met per-app accentkleur
  (podcast = lime/groen, GardenAlerts = groen, FF Soundboard = amber).
- **Privacy/voorwaarden**: elke app behoudt zijn **eigen stijl**, passend bij
  de app zelf. Alleen een NL/EN-taalknop en een terug-link zijn toegevoegd.

## Nog te doen

- **Store-links**: op de app-landingen staan nu informatieve badges
  (App Store / Google Play). Lever de exacte store-URL's aan om ze klikbaar te
  maken (zie `class="storebadge"` in de landing-pagina's).

## Lokaal bekijken

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```
