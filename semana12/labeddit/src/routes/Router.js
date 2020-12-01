import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import theme from "../constants/theme"

import LoginPage from "../screens/LoginPage/LoginPage"
import SignUpPage from "../screens/SignUpPage/SignUpPage"
import FeedPage from "../screens/FeedPage/FeedPage"
import PostPage from "../screens/PostPage/PostPage"
import ErrorPage from "../screens/ErrorPage/ErrorPage"
import MainAppBar from "../components/MainAppBar"

import { themeProvider } from "@material-ui/core"
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 64px;
`

const Router = () => {
    return(
        <BrowserRouter theme={theme}>
                <Container>
                    <MainAppBar />
                </Container>  
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage/>
                </Route>
                <Route exact path={"/signUp"}>
                    <SignUpPage/>
                </Route>
                <Route exact path={"/feedPage"}>
                    <FeedPage/>
                </Route>
                <Route exact path={"/postPage"}>
                    <PostPage/>
                </Route>
                <Route exact path={"/errorPage"}>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;