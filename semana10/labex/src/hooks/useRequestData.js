import axios from "axios";
import React, { useEffect, useState } from "react"

export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
           axios
           .get(url)
           .then((response) => {
                setData((response.data))
           })
           .catch((error) => {
               console.log(error, "erro no useRequestData")
           })
    },[url])
    
    return data
}

