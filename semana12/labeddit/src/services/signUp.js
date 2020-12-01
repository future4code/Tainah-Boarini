import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"
import { goToFeedPage } from "../routes/coordinator"

export const signUp = (body, history) => {


    axios.post(`${BASE_URL}/signup`, body)
        .then(resp => {
            localStorage.setItem("token", resp.data.token)
            goToFeedPage(history)

        }).catch(error => {
            console.log(error.message)
        })
}