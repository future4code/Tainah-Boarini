import React from "react";
// import Final from "./components/Final";

class Etapa3 extends React.Component {
    render(){
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de Inglês</option>
                </select>
            </div>
        );
    }
}

export default Etapa3;