# maartendoek.nl

Statische site (GitHub Pages) — thuisbasis van de apps van Maarten Doek, met
per-app privacybeleid en gebruiksvoorwaarden. Tweetalig (NL/EN) via een
taalknop rechtsboven.

**Live:** https://maartendoek.nl

## Apps

| App | Platforms | App Store | Google Play |
|-----|-----------|-----------|-------------|
| Aan'm de App (Aan'm de Podcast) | iOS · Android | `id6785004671` | `nl.aanmdepodcast.aanm_fan_app` |
| GardenAlerts | iOS · Android | `id6762011265` | `com.maartendoek.garden_alerts` |
| FF Soundboard (FunFair Soundboard) | iOS · Android | `id6760431806` | `com.maartendoek.flutter_ffsoundboard` |

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
  (podcast = lime/groen, GardenAlerts = groen, FF Soundboard = amber). De
  store-badges op de landingen linken naar de App Store en Google Play.
- **Privacy/voorwaarden**: elke app behoudt zijn **eigen stijl**, passend bij
  de app zelf. Alleen een NL/EN-taalknop en een terug-link zijn toegevoegd.

## Tweetaligheid

Elke pagina bevat NL- en EN-content inline; een taalknop rechtsboven wisselt
tussen beide en onthoudt de keuze (`localStorage`, sleutel `md-lang`). Er zijn
dus geen aparte taal-URL's.

## Hosting & deployment

- **GitHub Pages** bouwt vanaf branch `main` (root, `.nojekyll`). Elke merge
  naar `main` triggert automatisch een nieuwe deploy.
- **Custom domain** `maartendoek.nl` via het `CNAME`-bestand.
- **DNS** (bij TransIP): apex `@` → GitHub Pages-IP's
  `185.199.108.153`–`185.199.111.153` (A-records); `www` → `mjwdoek.github.io.`
  (CNAME).
- **HTTPS** wordt door GitHub automatisch geregeld (Let's Encrypt). Zet in
  Settings → Pages "Enforce HTTPS" aan zodra het certificaat is uitgegeven,
  zodat `http://` doorstuurt naar `https://`.

## Wijzigingen maken

`main` is beveiligd: **wijzigingen gaan alleen via een pull request** (directe
push, force-push en branch-verwijderen zijn geblokkeerd). Een review is niet
verplicht, dus de eigenaar kan een eigen PR zelf mergen.

```bash
git checkout -b mijn-wijziging
# ... aanpassingen ...
git commit -am "Beschrijving"
git push -u origin mijn-wijziging
gh pr create --base main --fill   # daarna mergen via GitHub
```

## Lokaal bekijken

```bash
python3 -m http.server 8000
# open http://localhost:8000/
```
