import React from 'react';
// import App from "App.js";
// import "./index.css";
import axios from "axios";

class Page2 extends React.Component {
    state = {
        usersList: [],
        home: true,
    };

    componentDidMount() {
        this.getUsers()
      }

      getUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
          headers: {
            Authorization: "tainah-bernardo-dumont"
          }
        })
        .then((response) => {
          this.setState({usersList: response.data})
          console.log(response)
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    onClickHome = () => {
        this.setState({home: !this.state.home})
    }


render(){
    const renderedUsers = this.state.usersList.map((users) => {
    return <p key={users.id}>{users.name}</p>
    });


    if(this.setState.home){
return (
    <div>
    {renderedUsers}
    <button onClick={this.onClickHome}>Voltar para página de cadastro</button>
    </div>
   )} else {
       return (<App />)
   };
}

};


export default Page2;