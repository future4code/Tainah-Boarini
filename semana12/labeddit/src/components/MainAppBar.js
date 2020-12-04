import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { goToFeedPage, goToLogin } from '../routes/coordinator'
import { ButtonContainer, Logo } from "./styled"
import logoB from "../assets/logoBranco.png"
import LoggedContext from '../context/LoggedContex';


const MainAppBar = () => {
  const history = useHistory()
  const loggedContext = useContext(LoggedContext)


  const handleLoginOrLogout = () => {

    const token = localStorage.getItem("token")

    if (token) {
      localStorage.removeItem("token")
      loggedContext.setLogged(false)
    }

    goToLogin(history)
  }

  return (
    <AppBar>
      <Toolbar>
        <ButtonContainer>
          <Logo src={logoB} onClick={() => goToFeedPage(history)} />
          <Button onClick={handleLoginOrLogout}>
            {loggedContext.logged ? "Logout" : ""}
            </Button>
        </ButtonContainer>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar