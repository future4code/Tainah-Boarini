//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: "ADMIN" | "NORMAL",
    age: number
}

// enum UserType {
//     ADMIN = "ADMIN",
//     NORMAL = "NORMAL"
// } >>>>>>> ao inves de fazer o enum aqui e preencher o array com UserType.ADMIN pra cada um, eu mudei direto no type user para type: "ADMIN" | "NORMAL"

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]


//~~~~~~~~~~~~~~~~~~ Exercício 2 ~~~~~~~~~~~~~~~~~~~~~~~~
//Crie um novo endpoint, que busque todos os usuários que tenham um type específico, recebendo um type por vez. Após isso, responda:

//a. Como você passou os parâmetros de type para a requisição? Por quê?

app.get("/user/search", (req: Request, res: Response) => {

    let errorCode: number = 400;

    try {

        const validQueries = ["ADMIN","NORMAL"]
        const type: string = (req.query.type as string).toUpperCase()

        if (!validQueries.includes(type)) {
            errorCode = 422
            throw new Error("Tipo inválido. Tente novamente.")
        }

        const userType = users.filter((user) => user.type.toUpperCase() === type)

        if (!userType) {
            errorCode = 404
            throw new Error("Tipo não encontrado")
        }

        const result = userType;
        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }

})

//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//Através do enum



// =========================Porta================================

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
