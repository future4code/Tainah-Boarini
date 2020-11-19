import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {useForm} from "../../../hooks/useForm";
import axios from "axios";
import "../../../assets/generalStyle.css";
import {Countries} from "../../../assets/countries"

const ApplicationFormPage = () => {
   const {form, onChange} = useForm({name:"", age:"", applicationText:"", profession:""})
       
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
            console.log("candidatou-se à viagem")
        })
        .catch((error) => {
            console.log(error)
        })
   }

   
    return (
        <div>
            <p>Formulário de inscrição</p>
            <form onSubmit={onSubmitForm}>
                <input 
                    type={"text"}
                    placeholder={"Nome"}
                    value={form.name}
                    onChange={handleInputChange}
                    name={"name"}
                    required
                />
                <input 
                    type={"number"}
                    placeholder={"Idade"}
                    value={form.age}
                    onChange={handleInputChange}
                    name={"age"}
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
                <input 
                    type={"text"}
                    placeholder={"Profissão"}
                    value={form.profession}
                    onChange={handleInputChange}
                    name={"profession"}
                    required
                />
                <Countries placeholder={"País"}> 
                    {/* <option
                    placeholder={"País"}
                    value={form.country}
                    name={"country"}
                    required
                    /> */}
                </Countries>

                <button>Enviar</button>

            </form>

            <button onClick={goHome}>Home</button>
            <button onClick={goListTrips}>Voltar para viagens</button>
        </div>
    )
}

export default ApplicationFormPage;
