import React from "react";
import {useHistory} from "react-router-dom";

const CreateTripPage = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    const goTripDetails = () => {
        history.push("/TripsDetails")
    }

    return (
        <div>
            <p>Adicionar novas viagens</p>
            <button onClick={goHome}>Home</button>
            <button onClick={goTripDetails}>Administrar Rotas</button>
        </div>
    )
}

export default CreateTripPage;
