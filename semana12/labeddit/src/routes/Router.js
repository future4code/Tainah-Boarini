import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import theme from "../constants/theme"

import LoginPage from "../screens/LoginPage/LoginPage"
import SignUpPage from "../screens/SignUpPage/SignUpPage"
import FeedPage from "../screens/FeedPage/FeedPage"
import PostPage from "../screens/PostPage/PostPage"
import ErrorPage from "../screens/ErrorPage/ErrorPage"
import MainAppBar from "../components/MainAppBar"
import DetailPage from "../screens/DetailsPage/DetailsPage"

import styled from 'styled-components'
import LoggedContext from "../context/LoggedContex";

const Container = styled.div`
  padding-top: 64px;
`

const Router = () => {
    const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

    const loggedContext = { logged, setLogged }

    return (
        <BrowserRouter theme={theme}>
            <LoggedContext.Provider value={loggedContext}>
                <Container>
                    <MainAppBar />
                </Container>
                <Switch>
                    <Route exact path={"/"}>
                        <LoginPage />
                    </Route>
                    <Route exact path={"/signUp"}>
                        <SignUpPage />
                    </Route>
                    <Route exact path={"/feedPage/"}>
                        <FeedPage />
                    </Route>
                    <Route exact path={"/details/:id"}>
                        <DetailPage />
                    </Route>
                    <Route exact path={"/postPage"}>
                        <PostPage />
                    </Route>
                    <Route exact path={"/errorPage"}>
                        <ErrorPage />
                    </Route>
                </Switch>
            </LoggedContext.Provider>
        </BrowserRouter>
    )
}
export default Router;