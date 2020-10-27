import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    arrayDePost: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
          nomeUsuario: 'Tainah',
          fotoUsuario: 'https://picsum.photos/40/50',
          fotoPost: 'https://picsum.photos/200/200',
      },
      {
        nomeUsuario: 'Labenu',
        fotoUsuario: 'https://picsum.photos/30/50',
        fotoPost: 'https://picsum.photos/200',
      }
  ],
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
};

adicionarPost = () =>{
  const novoPost = {
    nomeUsuario: this.state.valorInputNomeUsuario,
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost
  };

  const novoPostNoArray = [...this.state.arrayDePost, novoPost];

  this.setState({arrayDePost: novoPostNoArray});
  this.setState({valorInputNomeUsuario: ""});
  this.setState({valorInputFotoUsuario: ""});
  this.setState({valorInputFotoPost: ""});
};

onChangeInputNomeUsuario = (event) => {
  this.setState({valorInputNomeUsuario: event.target.value});
};

onChangeInputFotoUsuario = (event) => {
  this.setState({valorInputFotoUsuario: event.target.value});
};

onChangeInputFotoPost = (event) => {
  this.setState({valorInputFotoPost: event.target.value});
};

  render() {
    const listaDePosts = this.state.arrayDePost.map((posts) => {
      return (
        <p>
          {posts.nomeUsuario, posts.fotoUsuario, posts.fotoPost}
        </p>
      );
    });
    
    return (
      <div>
      <div>
        <input
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputNomeUsuario}
        placeholder={"Nome do Usuário"}
        />
        <input
        value={this.state.valorInputFotoUsuario}
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Foto do Usuário"}
        />
        <input
        value={this.state.valorInputFotoPost}
        onChange={this.onChangeInputFotPost}
        placeholder={"Foto do Post"}
        />
        <button onClick={this.adicionarPost}>Adicionar</button>
      </div>
    <div>{listaDePosts}</div>
      </div>
    
    );
  }
}

export default App;
