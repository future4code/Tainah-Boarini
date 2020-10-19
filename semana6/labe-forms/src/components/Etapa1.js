import React from "react";
// import Etapa2 from "./components/Etapa2";

class Etapa1 extends React.Component {
    render(){
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                    <p>1.Qual o seu nome/</p>
                    <input></input>
                    <p>2.Qual a sua idade?</p>
                    <input></input>
                    <p>3.Qual o seu e-mail?</p>
                    <input></input>
                    <p>4.Qual a sua escolaridade?</p>
                    <select>
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Enisno superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                    
                    
            </div>
        );
    }
}

export default Etapa1;
