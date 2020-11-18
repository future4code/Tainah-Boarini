import React from "react";
import {useHistory} from "react-router-dom";
import {useRequestData} from "../../../hooks/useRequestData";
import {CardTrip} from "../trip/style";

export default function ListTripsPage() {    

    //requisição de viagens usando o Get Trips
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/"

    const getTrips = useRequestData(`${baseUrl}trips`, undefined )

    //Mudanças de páginas com Router
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };

    const goApplicationForm = () => {
        history.push("/ApplicationForm/aquiVaiUmId")
    }
    
    return (
        <div>
            <p>Lista de viagens</p>
            {getTrips && getTrips.trips.map(trip => {
                return <CardTrip key={trip.id} 
                tripTitle={trip.name}
                tripDescription={trip.description}
                tripName={trip.planet}
                tripDuration={trip.durationInDays}
                tripDate={trip.date}
                />
            })}
            <button onClick={goHome}>Home</button>
            <button onClick={goApplicationForm}>Candidate-se!</button>
        </div>
    )
}
