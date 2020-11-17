import React from "react";
import {useHistory} from "react-router-dom";

const LoginPage = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    const goFirstLogin = () => {
        history.push("/FirstLogin")
    };

    const goHomeAdm = () => {
        history.push("/HomeAdm")
    }

    return (
        <div>
            <p>Área interna</p>
            <button onClick={goHome}>Home</button>    
            <button onClick={goFirstLogin}>Primeiro acesso</button>        
            <button onClick={goHomeAdm}>Entrar</button>
        </div>
    )
}

export default LoginPage;
