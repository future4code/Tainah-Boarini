import React, { useEffect, useState } from "react";
import {Card, Container, Header, Footer, Button, ContainerCard, Img, Bio} from "./styled";
import axios from "axios";

function MatchScreen() {
  const [profile, setProfile] = useState({});
  // const [match, setMatch] = useState("false")

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tainah/person"

  useEffect(() => {
    get()
  },[] )

    const get = () => {
      axios
    .get(baseUrl)
    .then((response) => {
      setProfile(response.data.profile);
    })
    .catch((error) => {
      console.log(error)
    })
    }

    const likeMatch = (boolean) => {
      const body = {
        id: profile.id,
        choice: boolean 
      };
      
      const axiosUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tainah/choose-person"
      
      axios
        .post(axiosUrl, body)
        .then((response) => {
          get()
        }) 
        .catch((error) => {
          console.log(error.message)
        })
    }

    if (profile) {
      console.log("ainda há perfil")
    } else {
      alert("os perfis acabaram")
    }

    return(
      <Container>
        <Card>
         <Header>
            astromatch
         </Header>
         <ContainerCard>           
            <Img src={profile.photo} alt={profile.name}/>
            <h3>{profile.name}, {profile.age}</h3>
            <Bio>{profile.bio}</Bio>
         </ContainerCard>          
         <Footer>
            <Button onClick={() => likeMatch(false)}>X</Button>
            <Button onClick={() => likeMatch(true)}>♥️</Button>
         </Footer>                      
        </Card>
      </Container>  
    )
}

export default MatchScreen