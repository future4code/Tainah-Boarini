import * as bcrypt from 'bcryptjs'
import dotenv from "dotenv"

dotenv.config()

export const hashPassword = (password: string): string => {
    const cost: number = Number(process.env.BCRYPT_COST)
    const salt = bcrypt.genSaltSync(cost);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
};

export function compare(
    plainText:string,
    cypherText:string

 ):boolean{
    return bcrypt.compareSync(plainText, cypherText)
 }