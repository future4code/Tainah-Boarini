import express, { Express } from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getByNames } from "./endpoints/getBynames";
import { getByType } from "./endpoints/getByType";
import { getByOrder } from "./endpoints/getByOrder";


dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();

app.get("/searchName", getByNames)
app.get("/searchType/:type", getByType)
app.get("/orderType", getByOrder)

// URL NO POSTMAN PARAMS >> http://localhost:3003/searchType/cx
// URL NO POSTMAN QUERY>> http://localhost:3003/searchName?name=Soter
// URL NO POSTMAN QUERY/ORDER>>http://localhost:3003/orderType?name=Soter&type=teacher

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});