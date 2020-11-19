import React from "react";
import {useHistory,useParams} from "react-router-dom";
import {useRequestData} from "../../../hooks/useRequestData";
import {CardTrip, CardText} from "./cardStyle"

export default function ListTripsPage() {    

    //requisição API de viagens usando o Get Trips
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/"
    const getTrips = useRequestData(`${baseUrl}trips`, undefined )
    console.log(getTrips)
    //Mudanças de páginas com Router e histórico
    const history = useHistory();
    const pathParams = useParams();

    const goHome = () => {
        history.push("/")
    };
    const goApplicationForm = () => {
        history.push(`/ApplicationForm/${pathParams.id}`)
    }
    
    return (
        <div>
            <h1>Lista de viagens</h1>
            {getTrips && getTrips.trips.map(trip => {
                return (
                <CardTrip key={trip.id}> 
                    <CardText>
                        <h3>{trip.name}</h3>
                        <p>{trip.description}</p>
                        <p>{trip.planet}</p>
                        <p>{trip.durationInDays}</p>
                        <p>{trip.date}</p>
                    </CardText>
                </CardTrip>
                )
            })}
            <button onClick={goHome}>Home</button>
            <button onClick={goApplicationForm}>Candidate-se!</button>
        </div>
    )
}
