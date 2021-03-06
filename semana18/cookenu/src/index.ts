import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {router} from "./router/routes"

dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})