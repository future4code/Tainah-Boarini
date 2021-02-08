import { user } from "../types/user";

export const performPurchase = async (user: user, value: number): Promise<user | undefined> => {

    if (user.balance >= value) {
        const balance: number = user.balance - value
        return { ...user, balance }
    }

    return undefined
}