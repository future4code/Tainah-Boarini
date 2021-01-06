import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateTripPage from "../components/admArea/CreateTripPage";
import HomePage from "../components/home/HomePage";
import TripDetailsPage from "../components/admArea/TripDetailsPage";
import LoginPage from "../components/admArea/LoginPage";
import HomeAdm from "../components/admArea/HomeAdm";
import FirstLoginPage from "../components/admArea/FirstLoginPage"

import ApplicationFormPage from "../components/publicArea/applicationForm/ApplicationFormPage";
import ListTripsPage from "../components/publicArea/listTrips/ListTripsPage";

export default function Router() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/ListTrips">
                <ListTripsPage />
            </Route>
            <Route exact path="/ApplicationForm/:id">
                <ApplicationFormPage />
            </Route>
            <Route exact path="/Login">
                <LoginPage />
            </Route>
            <Route exact path="/FirstLogin">
                <FirstLoginPage />
            </Route>
            <Route exact path="/HomeAdm">
                <HomeAdm />
            </Route>
            <Route exact path="/TripsDetails">
                <TripDetailsPage />
            </Route>            
            <Route exact path="/TripsDetails">
                <TripDetailsPage />
            </Route>
            <Route exact path="/CreateTrip">
                <CreateTripPage />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}