import React,{useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


export function useTesteHook() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const history = useHistory();
    // useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            history.push("/HomeAdm")
        }
    },[history]);
    
    
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/"
    
    const body = () => {
        const body ={
            data: email,
            password: password
        };

        axios
        .post(baseUrl, body)
        .then((res) => {
            localStorage.setItem("token",res.data.token);
            history.push("/HomeAdm")
            console.log("login efetuado com sucesso!")
        })
        .catch((error) => {
            console.log(error)
            alert("Verifique seu login e senha ou cadastre-se.")
        })
    }
}