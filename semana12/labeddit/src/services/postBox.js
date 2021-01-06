import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"

export const postBox = (body) => {
    
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }})

        .then(resp => {         
            alert("Post enviado!")

        }).catch(error => {
            console.log(error.message)
        })
}