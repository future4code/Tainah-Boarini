import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import {useInput} from "../../hooks/useInput"
import axios from "axios"

//muda as páginas
const CreateTripPage = () => {
    const [id, setId] = useState("")
    const [name, handleName] = useInput();
    const [planet, handlePlanet] = useInput()
    const [date, handleDate] = useInput()
    const [description, handleDescription] = useInput()
    const [duration, setDuration] = useState(null)

    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };
    const goTripDetails = () => {
        history.push("/TripsDetails")
    }

    //input controlado com números
    const handleDuration = (event) => {
        setDuration(event.target.value)
    }

    //muda o id
    const idValue = (idValue) => {
        setId(idValue.data.trip.id)
    }

    //Pega API de login postSignUp
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/trips"
    
    const addTrips = () => {
        const body ={
            id:id,
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: duration,
        };

        axios
        .post(baseUrl, body)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <p>Adicionar novas viagens</p>

            <input value={name} placeholder="Nome da viagem" onChange={handleName}/>
            <input value={planet} placeholder="Nome do planeta" onChange={handlePlanet}/>
            <input value={date} placeholder="__/__/___" onChange={handleDate}/>
            <input value={description} placeholder="Descrição" onChange={handleDescription}/>
            <input value={duration} placeholder="Dias" onChange={handleDuration}/>
            <button onClick={addTrips}>Adicionar viagem</button>

            <button onClick={goHome}>Home</button>
            <button onClick={goTripDetails}>Administrar Rotas</button>
        </div>
    )

}
export default CreateTripPage;
