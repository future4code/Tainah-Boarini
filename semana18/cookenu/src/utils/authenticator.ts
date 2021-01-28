import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types/authenticationData";

export const generateToken = (
    payload: AuthenticationData
): string => {

    const token: string = jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {expiresIn: process.env.JWT_EXPIRE_TIME}
    );

    return token;
};

export const getData = (token: string): AuthenticationData => {
    const { id } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData;

    return { id };
};