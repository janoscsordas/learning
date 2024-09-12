import express from "express"
import validator from "validator"

// egy hónapos napi kép lekérdezésből az adatok importálása
import { apiData } from "./data.js"

// ha szükséges, megváltoztathatod a portot
const PORT = 3000

function validateDate(date) {
    if (!validator.isDate(date, { format: "YYYY-MM-DD" })) {
        return false
    }

    return true
}

const app = express()

app.use(express.json())

/*
    a mai napi kép és leírás lekérdezése
    A DEMO_KEY-el történik szóval nem biztos, hogy működik sajnos.
*/
app.get("/api/today", async (req, res) => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

    if (!response.ok) {
        return res.status(500).json({error: { message: "Hiba történt a lekérdezés során." }})
    }

    const data = await response.json()

    res.json(data)
})

/*
    az URL-ben elküldött dátum alapján lekéri az aznapi fotót és adatait
    A képek 2024-08-12-től 2024-09-11-ig vannak.

    Az API így várja a request-et: /api/date="dátumod"
*/
app.get("/api/date=:apodDate", async (req, res) => {
    const apodDate = req.params.apodDate

    if (!apodDate || !validateDate(apodDate)) {
        return res.status(400).json({error: { message: "Hiba a dátum beolvasása során. Lehetséges, hogy rossz formátumban adtad meg a dátumot. A dátum formátuma: YYYY-MM-DD" }})
    }

    const foundDate = apiData.find(d => d.date === apodDate)

    if (!foundDate) {
        return res.status(500).json({error: { message: "A megadott dátum alapján nem található adat." }})
    }

    res.json(foundDate)
})

/*
    a megadott időintervallumon belül minden napi kép és adata lekérése
    A dátum ugyanúgy 2024-08-12-től 2024-09-11-ig van.

    Az API így várja a request-et: /api/dates?start_date="dátumod"&end_date="dátumod"
*/
app.get("/api/dates", async (req, res) => {
    const { start_date, end_date } = req.query

    if (!start_date || !end_date || !validateDate(start_date) || !validateDate(end_date)) {
        return res.status(400).json({error: { message: "Hiba a dátum beolvasása során. Lehetséges, hogy rossz formátumban adtad meg a dátumot. A dátum formátuma: YYYY-MM-DD" }})
    }

    if (start_date < apiData[0].date || end_date > apiData[apiData.length - 1].date) {
        return res.status(400).json({error: { message: "Nem adhat meg az időintervallumon kívüli dátumot." }})
    }

    const foundDates = apiData.filter(d => d.date >= start_date && d.date <= end_date)

    if (foundDates.length === 0 || !foundDates) {
        return res.status(500).json({ error: { message: "A megadott időintervallumon belül nem található adat." }})
    }

    res.json(foundDates)
})

app.listen(PORT, () => {
    console.log(`A szerver elindult, a kéréseket erre az URL-re tudod küldeni: http://localhost:${PORT}`)
})
