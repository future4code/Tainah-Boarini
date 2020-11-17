import React from "react";
import {useHistory} from "react-router-dom";

const ApplicationFormPage = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    const goListTrips = () => {
        history.push("/ListTrips")
    }

    return (
        <div>
            <p>Formulário de inscrição</p>
            <button onClick={goHome}>Home</button>
            <button onClick={goListTrips}>Voltar para viagens</button>
        </div>
    )
}

export default ApplicationFormPage;
