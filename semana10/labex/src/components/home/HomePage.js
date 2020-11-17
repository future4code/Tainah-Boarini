import React from "react";
import {useHistory} from "react-router-dom";

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
            <p>Home</p>
            <button onClick={goListTripsPage}>Candidate-se à uma viagem!</button>
            <button onClick={goLogin}>Login</button>
        </div>
    )
}

export default HomePage;
