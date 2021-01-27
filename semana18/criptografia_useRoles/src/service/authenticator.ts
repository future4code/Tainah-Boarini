import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../types/user";

//------------------- gera o token a partir do id e role que vai expirar em 1 ano ---

export function generateToken(input: AuthenticationData): string {

    const token: string = jwt.sign({input},
         process.env.JWT_KEY as string,
         {expiresIn: "1y"});

    return token;
}
//expiresIn: string ou numero, número é por segundo 60 = 1 minuto string é por separação de tempo, notação de tempo 1s,1m,1h,1d,1y,1M(mês)

//----------------- pega o token com id e role e verifica com a chave de acesso

export function getTokenData(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY!);
    return payload as AuthenticationData;
}


// ---------------- tipagem do que eu quero autenticar ---------------------------

export type AuthenticationData = {
    id: string,
    role: USER_ROLES //Aqui pega o ENUM do types
}
