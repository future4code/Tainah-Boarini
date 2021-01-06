import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {useForm} from "../../../hooks/useForm";
import axios from "axios";
import "../../../assets/generalStyle.css";
import {Countries} from "../../../assets/countries";

const ApplicationFormPage = () => {
   const {form, onChange,resetState} = useForm({
       name:"", 
       age:0, 
       applicationText:"", 
       profession:"", 
       country:"",
       tripId: ""
    })
       
    const history = useHistory();
    const pathParams = useParams();

    //troca de página
    const goHome = () => {
        history.push("/")
    };

    const goListTrips = () => {
        history.push("/ListTrips")
    }

    //inputs controlados
   const handleInputChange = (event) => {
       const {value, name} = event.target;
       onChange(value,name);
   }

   const onSubmitForm = (event) => {
       event.preventDefault()
       
       //Requisição da API POST Aply to Trip
       const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tainah-dumont/trips/${pathParams.id}/apply`
    
        const body ={
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        };

        axios
        .post(baseUrl, body)
        .then((res) => {
            alert("Parabéns, você se candidatou!")
            console.log("candidatou-se à viagem")
            resetState()
        })
        .catch((error) => {
            console.log(error)
            console.log(body)
        })
   }

    return (
        <div>
            <h1>Formulário de inscrição</h1>
            <form onSubmit={onSubmitForm}>
            <label className="GeneralStyle">Nome:</label>
                <input 
                    type={"text"}
                    placeholder={"Nome"}
                    value={form.name}
                    onChange={handleInputChange}
                    name={"name"}
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{3,}"}
                    required
                />
                <label className="GeneralStyle">Idade:</label>
                <input 
                    type={"number"}
                    placeholder={"Idade"}
                    value={form.age}
                    onChange={handleInputChange}
                    name={"age"}
                    min="18"
                    required
                />
                <label className="GeneralStyle">Comente a razão da sua viagem com a LabeX</label>
                <input 
                    type={"text"}
                    placeholder={"Texto de inscrição"}
                    value={form.applicationText}
                    onChange={handleInputChange}
                    name={"applicationText"}
                    required
                />
                <label className="GeneralStyle">Profissão:</label>
                <input 
                    type={"text"}
                    placeholder={"Profissão"}
                    value={form.profession}
                    onChange={handleInputChange}
                    name={"profession"}
                    pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{10,}"}
                    required
                />
                {/* <input 
                    type={"text"}
                    placeholder={"País"}
                    value={form.country}
                    onChange={handleInputChange}
                    name={"country"}
                    required
                /> */}
                <label className="GeneralStyle">País:</label>
                <Countries country={form.country} onChange={handleInputChange}/> 

                <button>Enviar</button>

            </form>

            <button onClick={goHome}>Home</button>
            <button onClick={goListTrips}>Voltar para viagens</button>
        </div>
    )
}

export default ApplicationFormPage;
