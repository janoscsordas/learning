# API a Nasa-s feladathoz

Az API futtatásához kövesd/kövesse az utasítást

```bash
npm install
npm run dev
```

AZ Api Endpoint-okat a következőképpen lehet használni:

```plaintext
/api/today
```

Ez az aznapi képet kéri le, de a Nasa API szerveréről szóval lehetséges, hogy nem fog működni.

```plaintext
/api/date="dátumod"
```

Ez egy megadott dátum alapján elküldi az aznapi fotót és adatait. Az adatot 1 hónap intervallumban 2024-08-12-től 2024-09-11-ig vannak jelen.
**note: A "dátumod" helyére a kívánt dátumot helyettesítsd be.**

```plaintext
/api/dates?start_date="dátumod"&end_date="dátumod"
```

Ez a megadott időintervallumon belül minden napi fotót és adatot elküld. Az intervallum itt is: 2024-08-12 2024-09-11

Készítette: Csordás János
