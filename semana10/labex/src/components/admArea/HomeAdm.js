import React from "react";
import {useHistory} from "react-router-dom";

const HomeAdm = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    const goCreateTrip = () => {
        history.push("/CreateTrip")
    };

    const goTripDetails = () => {
        history.push("/TripsDetails")
    }

    return (
        <div>
            <p>Home Área interna</p>
            <button onClick={goHome}>Home</button>
            <button onClick={goCreateTrip}>Criar novas viagens</button>
            <button onClick={goTripDetails}>Administrar Rotas</button>
        </div>
    )
}

export default HomeAdm;
