import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"

export const vote = (bodyVote, id, getData) => {
   
    const body = {
        "direction": bodyVote
    }
        
        axios.put(`${BASE_URL}/posts/${id}/vote`, body, {
            headers: {
              Authorization: localStorage.getItem("token")
            }})
    
            .then(resp => {     
                getData()    
    
            }).catch(error => {
                console.log(error.message)
            })
    
    return vote;
}

