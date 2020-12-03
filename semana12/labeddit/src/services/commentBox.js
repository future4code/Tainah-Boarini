import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"

export const commentBox = (body, id) => {
    
    axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }})

        .then(resp => {         
            alert("Comentário enviado!")

        }).catch(error => {
            console.log(error.message)
        })
}