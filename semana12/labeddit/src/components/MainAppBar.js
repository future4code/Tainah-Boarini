import React from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { goToFeedPage, goToLogin } from '../routes/coordinator'
import {ButtonContainer, Logo} from "./styled"
import logoB from "../assets/logoBranco.png"

const MainAppBar = () => {
  const history = useHistory()

    return (
        <AppBar>
          <Toolbar>
            <ButtonContainer>
                <Logo src={logoB} onClick={()=>goToFeedPage(history)}  /> 
                <Button onClick={()=>goToLogin(history)}>logout</Button> 
             </ButtonContainer>
          </Toolbar>
        </AppBar>
    )
}

export default MainAppBar