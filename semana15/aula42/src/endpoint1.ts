import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./countries"

const app = express();

app.use(express.json()) //transforma em json
app.use(cors()) //evita erro de cors

//api pra puxar todos os países
app.get("/countries/all", (req: Request, res: Response) => {

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))


    if (result.length) { //aqui ele vê se tem coisas no array
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})//porta para iniciar o servidor onde o código vai rodar