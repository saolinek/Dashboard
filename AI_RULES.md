# AI_RULES.md
> **DŮLEŽITÉ UPOZORNĚNÍ PRO AI:** Tento soubor je **NADŘAZENÝ** souboru README.md i jakýmkoli běžným konvencím. Obsahuje striktní pravidla pro práci na tomto projektu. Přečti si ho před každou interakcí.

## 1. KONTEXT PROJEKTU & UŽIVATELE
- **Uživatel:** Není programátor. Nechce číst kód, chce funkční výsledek.
- **Technologie:** Čisté HTML / CSS / JS. Žádný backend. Žádný Node.js, npm, bundlery (Webpack/Vite) ani build procesy.
- **Hosting:** Web běží přímo z GitHub Pages.
- **Struktura:** `index.html` je rozcestník (Dashboard). Ostatní aplikace (např. `gym.html`) jsou samostatné soubory ("Single File Components" princip, ale v čistém HTML).
- **Cíl:** Jednoduchost, stabilita, vizuální čistota.

## 2. ZÁVAZNÁ PRAVIDLA KÓDU
1.  **Žádné externí závislosti:** Nepoužívej `import`, `require`, ani npm balíčky. Pokud je nutná knihovna, použij CDN (např. pro TailwindCSS), ale pouze pokud je to nezbytné.
2.  **Samostatnost souborů:** Změna v `gym.html` nesmí rozbít `index.html`. CSS piš inline (`<style>`) nebo do hlavičky daného souboru, nevytvářej globální CSS soubory, pokud o to nejsi výslovně požádán.
3.  **Mobile-First:** Vše musí fungovat perfektně na mobilu. Desktop je až druhotný (responzivita pomocí `@media (min-width: ...)`).
4.  **Design System:**
    - Dodržuj existující vizuální styl (fonty 'Inter'/'Cinzel', gradienty, glassmorphism, zaoblené rohy).
    - **NIKDY** neměň design, který funguje, jen proto, že "to jde udělat lépe".
5.  **Scroll:**
    - **KRITICKÉ:** Hlavní kontejner (`body` nebo wrapper) nesmí mít zbytečný scrollbar, pokud se obsah vejde na obrazovku.
    - Používej `min-height: 100dvh` a `box-sizing: border-box`.

## 3. CO JE PŘÍSNĚ ZAKÁZÁNO 🚫
- **ZAKÁZÁNO:** Refaktorovat celý kód, pokud máš jen opravit malou chybu.
- **ZAKÁZÁNO:** Měnit logiku fungujících částí bez vyžádání.
- **ZAKÁZÁNO:** Přidávat složité JavaScript frameworky (React, Vue) do HTML souborů.
- **ZAKÁZÁNO:** Odstraňovat komentáře, které tam uživatel nebo předchozí iterace zanechaly jako instrukce (pokud nejsou zastaralé).
- **ZAKÁZÁNO:** Provádět změny ve více souborech najednou, pokud to není nezbytně nutné pro propojení (např. přidání linku).

## 4. POVINNÝ POSTUP PŘI KAŽDÉ ÚPRAVĚ
Při každém úkolu musíš postupovat přesně v tomto pořadí:

1.  **ANALÝZA:**
    - Přečti si `AI_RULES.md`.
    - Přečti si soubor, který máš upravit.
    - Pokud zadání není 100% jasné, **ZEPTEJ SE**. Neodhaduj.

2.  **PLÁN (Mentální):**
    - Identifikuj minimální nutný zásah pro splnění úkolu.
    - Ověř, zda změna neporuší vizuální styl nebo mobile-first pravidlo.

3.  **PROVEDENÍ:**
    - Aplikuj změnu pomocí nástrojů.
    - Ujisti se, že jsi neuzavřel tagy špatně nebo nesmazal důležitý kus kódu.

4.  **KONTROLA:**
    - Ověř, že jsi nezavedl horizontální scrollbar.
    - Ověř, že jsi nerozbil layout na mobilu.

---
*Tento soubor slouží jako paměť a zákon pro AI agenty pracující na tomto repozitáři.*
