import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.button`
  color: red;
  margin-left: 10px;
  cursor: pointer;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "tainah-bernardo-dumont"
  }
};

class UserListPage extends React.Component {
  state = {
    userList: []
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ userList: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deleteUser = (userId) => {
    axios
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then((response) => {
        alert("Usuário deletado!");
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderUserList = this.state.userList.map((user) => {
      return (
        <p key={user.id}>
          {user.name}
          <DeleteButton onClick={() => this.deleteUser(user.id)}>
            Excluir
          </DeleteButton>
        </p>
      );
    });

    return (
      <div>
        <h2>Usuários cadastrados:</h2>
        {renderUserList}
      </div>
    );
  }
}
export default UserListPage;
