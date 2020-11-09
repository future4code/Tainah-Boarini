import React from "react";
import FormPage from "./components/FormPage";
import UserListPage from "./components/UserList";
import "./styles.css";
import styled from "styled-components";

const Button = styled.button`
  position: left;
  top: 10px;
  left: 10px;
  cursor: pointer;
`;

class App extends React.Component {
  state = {
    formPage: true
  };

  changePage = () => {
    this.setState({ formPage: !this.state.formPage });
  };

  render() {
    const currentPage = this.state.formPage ? <FormPage /> : <UserListPage />;

    return (
      <div className="App">
        {currentPage}
        <Button onClick={this.changePage}>Mudar de página</Button>
      </div>
    );
  }
}
export default App;
