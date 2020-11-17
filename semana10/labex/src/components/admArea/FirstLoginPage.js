import React from "react";
import {useHistory} from "react-router-dom";

const LoginPage = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    const goLogin = () => {
        history.push("/Login")
    }

    return (
        <div>
            <p>Cadastro</p>
            <button onClick={goHome}>Home</button>    
            <button onClick={goLogin}>Login</button>        
        </div>
    )
}

export default LoginPage;
