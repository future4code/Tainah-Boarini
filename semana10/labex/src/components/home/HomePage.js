import React from "react";
import {useHistory} from "react-router-dom";
import "../../assets/generalStyle.css"

const HomePage = () => {
    const history = useHistory();

    const goListTripsPage = () => {
        history.push("/ListTrips")
    };

    const goLogin = () => {
        history.push("/Login")
    }

    
    return (
        <div>
            <h1>LabeX</h1>
            <button className="Button"onClick={goListTripsPage}>Candidate-se à uma viagem!</button>
            <button className="Button" onClick={goLogin}>Entrar</button>
        </div>
    )
}

export default HomePage;
