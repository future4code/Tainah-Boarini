import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./countries"

const app = express();

app.use(express.json()) //transforma em json
app.use(cors()) //evita erro de cors

//api para alterar nome do país/capital
app.put('/countries/edit/:id', (req: Request, res: Response) => {
    const result = countries.findIndex(
        country => country.id === Number(req.params.id)
    )
    countries[result].name = req.body.name;
    countries[result].capital = req.body.capital

    if(result) {
        res.status(200).send(req.body)
    } else {
        res.status(404).send("Not found")
    }
})


app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000")
})//porta para iniciar o servidor onde o código vai rodar