import { v4 } from "uuid"
import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import dotenv from 'dotenv'
import routes from "./routes/router"


const id = v4();

console.log("Generated Id: ", id);

//-----------------------------------------
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

//----------- CRUD -----------------------
app.use(routes)

//-------- Configurações servidor rodando --------
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  }); 
