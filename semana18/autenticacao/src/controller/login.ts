import { Request, Response } from "express";
import { userInfo } from "os";

export const login = async (req: Request, res: Response): Promise<void> => {

    try {

        const userEmail = 

        if(user)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}