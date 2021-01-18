
import express, { Request, Response, Router } from "express"
import { accounts, user } from "../users"
import cors from "cors"

const router: Router = express.Router()
router.use(express.json())
router.use(cors())


router.post("/create", (req: Request, res: Response) => {

    let errorCode: number = 400

    const newUser: user = {
        name: req.body.name,
        cpf: req.body.cpf,
        dateOfBirth: req.body.dateOfBirth,
        balance: req.body.balance,
        bankStatement: []
    }

    const result: user | undefined = accounts.find(
        user => user.cpf === req.body.cpf
    )
    try {

        if(result) {
            errorCode = 401
            throw new Error("CPF já existe")
        }

        accounts.push(newUser)
        res.status(200).send({message:"Sucesso! Usuário adicionado", user:newUser})
        

    } catch (error) {
        res.status(errorCode).send(error.message)

    }
})

export default router 