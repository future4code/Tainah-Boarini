import axios from "axios";
import { BASE_URL } from "../constants/apiConstants"
import React, { useEffect } from "react"

export const voteComment = (bodyVote, id, commentId, getData) => {
 
    const body = {
        "direction": bodyVote
    }
        
        axios.put(`${BASE_URL}/posts/${id}/comment/${commentId}/vote`, body, {
            headers: {
              Authorization: localStorage.getItem("token")
            }})
    
            .then(resp => {         
                getData() 
    
            }).catch(error => {
                console.log(error.message)
            })
    
    return voteComment;
}

