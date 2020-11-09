import React from 'react';
import "./index.css";
import axios from "axios";
import Page2 from "./components/Page2";
import App from "./App"

class App extends React.Component {
  state = {
    createUser: [],
    userValue: "",
    userEmailValue: "",
    home: true,
    page2: false,
  };


createNewUser = () => {
  const body = {
    name:this.state.userValue,
    email:this.state.userEmailValue
  };

  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,{
      headers: {
        Authorization: "tainah-bernardo-dumont"
      } 
    }
  )
  .then((response) => {
    this.setState({userEmailValue: "", userValue: ""});
    window.alert("Usuário cadastrado com sucesso!")
    console.log(response)

  })
  .catch((error) => {
    console.log(error.message);
    window.alert("Verifique seu nome e e-mail.")
  });

};

  onChangeUserValue = (event) => {
    this.setState({userValue: event.target.value});
  };

  onChangeUserEmailValue = (event) => {
    this.setState({UserEmailValue: event.target.value});
  };

  onClickPage2 = () => {
    this.setState({home: !this.state.home, page2: !this.state.page2})

  };

  render() {
   if(this.state.home){

    return (
    <div className="App">
      <div>
        <h3>Cadastro do usuário</h3>
        <h4>Nome: </h4>
        <input
          placeholder="Digite seu nome"
          value={this.state.userValue}
          onChange={this.onChangeUserValue}
        />
        <h4>E-mail: </h4>
        <input 
          placeholder="Digite seu e-mail"
          value={this.state.userEmailValue}
          onChange={this.onChangeUserEmailValue}
        />
      </div>      

        <button onClick={this.createNewUser}>Cadastrar</button>
        <button onClick={this.onClickPage2}>Exibir lista de usuários</button>
      
    </div>
    )} else {
      return(
        <Page2 />
      )
    };


  }
}

export default App;
