import React, { useEffect } from "react"
import { goToFeedPage } from "../routes/coordinator"
import { useHistory } from 'react-router-dom';

export const useUnprotectPage = () => {
    const history = useHistory()

    //uso o useEffect com o token pra proteger minha página
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token) {
            goToFeedPage(history)
        }
    }, [history])
}
