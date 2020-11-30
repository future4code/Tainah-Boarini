import React from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { goToFeedPage } from '../routes/coordinator'

const MainAppBar = () => {
  const history = useHistory()

    return (
        <AppBar>
          <Toolbar>
          <Button onClick={()=>goToFeedPage(history)}>LabEddit</Button> 
          </Toolbar>
        </AppBar>
    )
}

export default MainAppBar