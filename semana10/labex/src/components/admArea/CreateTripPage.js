import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import axios from "axios";
import "../../assets/generalStyle.css";
import {dateFormat} from "../../assets/dateFormat"


const CreateTripPage = () => {
    const stringDate = dateFormat(new Date())
    const {form, onChange, resetState} = useForm({
        name:"",
        planet:"",
        date: stringDate,
        description:"",
        duration: ""
    })

    //muda as páginas
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    };
    const goTripDetails = () => {
        history.push("/TripsDetails")
    }

    //hook para inputs controlados
    const handleInputChange = (event) => {
        const {value, name} = event.target
        onChange(value,name)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        const{value,name} = event.target;
        onChange(value,name)
    
    //Pega API de login postSignUp
    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/trips"
    
        const body ={
            id:"",
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration,
        };

        axios
        .post(baseUrl, body, 
            {headers: {
                auth: localStorage.getItem("token")
            }})

        .then((res) => {
            console.log("adicionou viagem")
            alert("Viagem adicionada!")
            resetState()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Adicionar novas viagens</h1>

            <form onSubmit={onSubmitForm}>
                <label className="GeneralStyle">Nome da viagem:</label>
                <input 
                type={"text"}
                value={form.name}
                name={"name"} 
                placeholder="Nome da viagem" 
                onChange={handleInputChange}
                />

                <label className="GeneralStyle">Planeta de destino:</label>
                <input 
                type={"text"}
                value={form.planet} 
                name={"planet"}
                placeholder="Nome do planeta" 
                onChange={handleInputChange}
                />

                <label className="GeneralStyle">Data:</label>
                <input 
                type={"date"}
                value={form.date} 
                name={"date"}
                onChange={handleInputChange}
                />

                <label className="GeneralStyle">Descrição da viagem:</label>
                <input 
                type={"text"}
                value={form.description} 
                name={"description"}
                placeholder="Descrição" 
                onChange={handleInputChange}
                />

                <label className="GeneralStyle">Duração:</label>
                <input 
                type={"number"}
                value={form.duration}
                name={"duration"} 
                placeholder="Dias" 
                onChange={handleInputChange}
                />

                <button>Adicionar viagem</button>

            </form>

            <button onClick={goHome}>Home</button>
            <button onClick={goTripDetails}>Administrar Rotas</button>
        </div>
    )

}
export default CreateTripPage;
