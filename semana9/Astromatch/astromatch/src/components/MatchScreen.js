import React, { useEffect, useState } from "react";
import {Card, Container, Header, ContainerCard, IconReturn, ImgMatches, ContainerMatches, ButtonClear, Logo} from "./styled";
import axios from "axios";
import leftArrow from "../img/leftArrow.png"
import Logotipo from "../img/logoAstromatch.png"

function MatchScreen(props) {
  const [profileMatch, setProfileMatch] = useState([]);
  

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tainah/matches"

  useEffect(() => {
    getMatches()
  },[] )

    const getMatches = () => {
      axios
    .get(baseUrl)
    .then((response) => {
      setProfileMatch(response.data.matches)
    })
    .catch((error) => {
      console.log(error)
    })
    }
    
    const baseUrlClear = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tainah/clear"

    const putClear = () => {
      axios
      .put(baseUrlClear)
      .then((response) => {
        getMatches()
        alert("limpou")
      })
    }

    return(
      <Container>
        <Card>
          <Header>
            <IconReturn src={leftArrow} alt={"voltar"} onClick={props.goHome}/>
            <Logo src={Logotipo} />
          </Header>
          <ContainerCard>           
            {profileMatch.map((profile) =>{
              return (
                  <ContainerMatches key={profile.id}>
                    <ImgMatches src={profile.photo} alt={profile.name}/> 
                    <p>{profile.name}</p>
                  </ContainerMatches>
                  )
            })}              
          </ContainerCard>                            
        </Card>
          <ButtonClear onClick={putClear}>Limpar Matches</ButtonClear>  
      </Container>  
    )
}

export default MatchScreen