TOKAJ KALAUZ – HÁROMNYELVŰ STATIKUS WEBOLDAL
================================================
Nyelvek: magyar (hu), angol (en), német (de)

Felépítés:
- index.html: nyelvválasztó
- hu/, en/, de/: a teljes weboldal összes aloldala mindhárom nyelven
- style.css: közös reszponzív dizájn
- script.js: mobilmenü, cikk- és borászat-szűrés, évszám
- sitemap.xml és robots.txt: keresőoptimalizálási alapok

Aloldalak mindhárom nyelven:
- index.html (kezdőlap)
- tokaji-borok.html (borstílusok)
- szolofajtak.html (szőlőfajták)
- borvidek.html (borvidék)
- boraszatok.html (borászatok)
- tudastar.html (tudástár)
- kereses.html (kereső)
- adatvedelem.html (adatvédelmi tájékoztató-minta)
- impresszum.html (impresszum-minta)

HELYI MEGTEKINTÉS
Nyisd meg a gyökérkönyvtár index.html fájlját. Internetkapcsolat szükséges a külső képek és a Google Fonts betöltéséhez.

NETLIFY
1. Csomagold ki a ZIP-et.
2. Nyisd meg a https://app.netlify.com/drop oldalt.
3. Húzd fel a teljes tokaj-kalauz-trilingual mappát, vagy annak tartalmát úgy, hogy a gyökér index.html is a publikált mappába kerüljön.
4. A Netlify automatikus címet ad. Saját domainhez a Netlify Domain management felületét és a domain szolgáltatód DNS-beállításait használd.

ÉLESÍTÉS ELŐTT KÖTELEZŐ TEENDŐK
- A sitemap.xml és robots.txt fájlokban cseréld ki a YOUR-DOMAIN.hu helyőrzőt a valódi domainre.
- A HTML-fájlok canonical és hreflang URL-jeiben is cseréld ki a YOUR-DOMAIN.hu értéket a saját domainre.
- Töltsd ki az adatvédelmi oldalt és az impresszumot a tényleges üzemeltetői adatokkal.
- Ellenőrizd a szövegek tényszerűségét és a külső képek licencét; a képek jelenleg Unsplashről töltődnek be.
- A Google AdSense és Analytics nincs beépítve. Ha hozzáadod őket, frissítsd az adatvédelmi tájékoztatót és állíts be megfelelő hozzájárulás-kezelést.
- A borászati címtár jelenleg bővíthető kezdőstruktúra, nem teljes adatbázis.
- A Tokaj Kalauz független kiadvány, nem hivatalos borvidéki portál.

A nyelvválasztó minden oldalon a megfelelő nyelvű párjára mutat. A kereső az adott nyelvi oldalon szereplő összefoglalókat szűri; nem keres automatikusan minden oldalon egyszerre.
