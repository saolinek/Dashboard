# Dashboard & PWA
Rozcestník pro osobní webové aplikace. Funguje jako **PWA (Progressive Web App)** s podporou offline režimu.

## Struktura projektu
- `/` - Root, obsahuje pouze `index.html` (rozcestník) a dokumentaci.
- `/apps/` - Samostatné HTML aplikace (Kalkulačka, Gym, Work...).
- `/pwa/` - Konfigurace PWA (`manifest.json`, `service-worker.js`).
- `/assets/` - Ikony a statická data.

## Jak přidat aplikaci na plochu 📲
Tento web je PWA. Můžete si ho nainstalovat jako nativní aplikaci:

- **Android (Chrome):** Otevřete web -> Tři tečky vpravo nahoře -> "Přidat na plochu" / "Nainstalovat aplikaci".
- **iOS (Safari):** Otevřete web -> Tlačítko Sdílet (čtverec se šipkou) -> "Přidat na plochu".
- **PC (Chrome/Edge):** Ikonka "Instalovat" v adresním řádku vpravo.

## Pro AI Agenty 🤖
Před úpravami si vždy přečti **AI_RULES.md**. Je to nadřazený dokument pro veškerý vývoj.