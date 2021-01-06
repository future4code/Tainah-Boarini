import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
// import {useTesteHook} from "../../hooks/useTesteHook"

const LoginPage = () => {   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //troca páginas
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    //input controlado
    const newEmail = (event) => {
        setEmail(event.target.value)
    }

    const newPassword = (event) => {
        setPassword(event.target.value)
    }

    //Pega API de login postSignUp
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/signup"
    
    const fistLogin = () => {
        const body ={
            email: email,
            password: password
        };

        axios
        .post(baseUrl, body)
        .then((res) => {
            // localStorage.setItem("token",res.data.token);
            history.push("/Login")
            alert("Usuário cadastrado com sucesso!")
        })
        .catch((error) => {
            console.log(error)
        })

    }
    return (
        <div>
            <p>Cadastro</p>
            <input value={email} placeholder="Digite seu e-mail" onChange={newEmail}/>
            <input value={password} placeholder="Crie uma senha" onChange={newPassword}/>
            <button onClick={goHome}>Home</button>    
            <button onClick={fistLogin}>Cadastrar usuário</button>        
        </div>
    )
}

export default LoginPage;
