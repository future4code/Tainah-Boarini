import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"
import { useParams } from "react-router-dom"

export const CommentBox = (body) => {
    const params = useParams()
    
    axios.post(`${BASE_URL}/${params.id}/comment`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }})

        .then(resp => {
            localStorage.getItem("token", resp.data.token)
            alert("Comentário enviado!")

        }).catch(error => {
            console.log(error.message)
        })
}