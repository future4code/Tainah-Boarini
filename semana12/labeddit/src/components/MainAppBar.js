import React from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { goToFeedPage, goToLogin } from '../routes/coordinator'
import {ButtonContainer} from "./styled"

const MainAppBar = () => {
  const history = useHistory()

    return (
        <AppBar>
          <Toolbar>
            <ButtonContainer>
                <Button onClick={()=>goToFeedPage(history)}>LabEddit</Button> 
                <Button onClick={()=>goToLogin(history)}>login</Button> 
             </ButtonContainer>
          </Toolbar>
        </AppBar>
    )
}

export default MainAppBar