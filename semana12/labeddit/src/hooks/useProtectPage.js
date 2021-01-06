import React, { useEffect } from "react"
import { goToLogin } from "../routes/coordinator"
import { useHistory } from 'react-router-dom';

export const useProtectPage = () => {
    const history = useHistory()

    //uso o useEffect com o token pra proteger minha página
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (!token) {
            goToLogin(history)
        }
    }, [history])
}
