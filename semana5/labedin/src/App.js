import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import tainah from './img/tainah.jpg';
import labenu from './img/labenu.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= { tainah }
          nome="Tainah Bernardo" 
          descricao="Oiee! Eu cheguei até aqui viva!! To gostando do React, parece mais simples de entender apesar das mutretas no terminal!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      
        <CardPequeno
        imagem="https://www.snackbordo.com.br/wp-content/uploads/2017/07/icone-email.png"
        texto="Email:"   
        textoComplemento="tainahboarini@gmail.com"   
        />
      
        <CardPequeno
        imagem="https://www.flaticon.com/svg/static/icons/svg/1104/1104720.svg"
        texto="Endereço:"   
        textoComplemento="Rua da Vitória!"   
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Cuso completo Fullstack com ferramentas mais recentes no mercado" 
        />
        
        <CardGrande 
          imagem="https://i.ytimg.com/vi/R5ffoELOd8g/maxresdefault.jpg"
          nome="Artista Visual" 
          descricao="Trabalhei nas principais instituições culturais de SP na área de Artes Visuais." 
        />
      

      <h2>Skills</h2>
        <CardGrande 
          imagem= "data:image/png;base64,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"
          nome="Javascript" 
          descricao="Conceitos e fundamentos sobre Javascript. Por exemplo, uso do DOM, funções, objetos, laços, condicionais."
        />

        <CardGrande 
          imagem= "data:image/png;base64,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"
          nome="CSS" 
          descricao="Conceitos e fundamentos sobre CSS, como grid, flexbox, estilização."
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
