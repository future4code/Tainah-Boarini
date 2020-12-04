import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"

export const commentBox = (body, id, getData) => {
   
    axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }})

        .then(resp => {       
            getData()   
            console.log("Comentário enviado!")

        }).catch(error => {
            console.log(error.message)
        })
}