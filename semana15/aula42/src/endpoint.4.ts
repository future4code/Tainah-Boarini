import express, { Request, Response } from "express"
import cors from "cors"
import { countries, country } from "./countries"

const app = express();

app.use(express.json()) //transforma em json
app.use(cors()) //evita erro de cors

//api pra puxar todos os países
app.put("/countries/edit/:id", (req: Request, res: Response) => {

    const result = countries.map(country => ({
        name: country.name,
        capital: country.capital
        
    }))




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})//porta para iniciar o servidor onde o código vai rodar