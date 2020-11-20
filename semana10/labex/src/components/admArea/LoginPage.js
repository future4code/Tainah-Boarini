import React,{useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
// import {useProtectedPage} from "../../hooks/useProtectedPage"
import axios from "axios";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    // useProtectedPage()
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        // const token = localStorage.getItem("token");

        if(token) {
            history.push("/HomeAdm")
        }
    },[history]);

    //input controlado
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
 
    //troca páginas
    const goHome = () => {
        history.push("/")
    };

    const goFirstLogin = () => {
        history.push("/FirstLogin")
    };

    //Pega API de login postSignUp
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/login"
    
    const login = () => {
        const body ={
            email: email,
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

    return (
        <div>
            <p>Área interna</p>
            <input value={email} placeholder="E-mail" onChange={handleEmail}/>
            <input value={password} placeholder="Senha" onChange={handlePassword}/>
            <button onClick={goHome}>Home</button>    
            <button onClick={goFirstLogin}>Primeiro acesso</button>        
            <button onClick={login}>Fazer login</button>
        </div>
    )
}

export default LoginPage;
