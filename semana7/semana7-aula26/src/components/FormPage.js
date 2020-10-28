import React from "react";
import axios from "axios";
import styled from "styled-components";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "tainah-bernardo-dumont"
  }
};

const Button = styled.button`
  background-color: orange;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 50px;
`;

const Div = styled.div`
  margin: 15px;
  font-weight: bold;
`;

const Container = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  position: relative;
`;

class FormPage extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  };

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        alert("Usuário cadastrado!");
        this.setState({ nameValue: "", emailValue: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  render() {
    return (
      <Container>
        <Div>
          Nome:
          <input
            value={this.state.nameValue}
            onChange={this.onChangeNameValue}
            placeholder="Digite seu nome"
          />
        </Div>
        <Div>
          Email:
          <input
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}
            placeholder="Digite seu e-mail"
          />
        </Div>
        <Button onClick={this.createUser}>Criar usuário</Button>
      </Container>
    );
  }
}
export default FormPage;
