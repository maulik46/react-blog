import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "../views/index";
import NumberGame from "../views/NumberGame";
import SimonGame from "../views/simonGame";
import PersonDoesNotExist from "../views/PersonDoesNotExist";

export default function RouterLinks() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Index pageTitle="Home" />
                </Route>
                <Route path="/number-game">
                    <NumberGame pageTitle="Number Game" />
                </Route>
                <Route path="/simon-game">
                    <SimonGame pageTitle="Simon Game" />
                </Route>
                <Route path="/person-does-not-exist">
                    <PersonDoesNotExist pageTitle="Person does not exist" />
                </Route>
            </Switch>
        </>
    );
}
