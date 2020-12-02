import React from "react";
import {useHistory} from "react-router-dom";

const TripDetailsPage = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    const goCreateTrip = () => {
        history.push("/CreateTrip")
    };

    return (
        <div>
            <p>Administrar rotas</p>
            <button onClick={goHome}>Home</button>
            <button onClick={goCreateTrip}>Criar novas viagens</button>
        </div>
    )
}

export default TripDetailsPage;
