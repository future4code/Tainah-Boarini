import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateTripPage from "../admArea/CreateTripPage";
import HomePage from "../home/HomePage";
import TripDetailsPage from "../admArea/TripDetailsPage";
import LoginPage from "../admArea/LoginPage";
import HomeAdm from "../admArea/HomeAdm";
import FirstLoginPage from "../admArea/FirstLoginPage"

import ApplicationFormPage from "../publicArea/ApplicationFormPage";
import ListTripsPage from "../publicArea/trip/ListTripsPage";

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