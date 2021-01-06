import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, history, setLogged) => {


    axios.post(`${BASE_URL}/login`, body)
        .then(resp => {
            localStorage.setItem("token", resp.data.token)
            setLogged(true)
            goToFeedPage(history)

        }).catch(error => {
            alert("E-mail ou senha inválido")
            console.log(error.message)
        })
}