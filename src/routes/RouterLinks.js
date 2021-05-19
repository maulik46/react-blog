import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "../views/index";
import NumberGame from "../views/NumberGame";
import SimonGame from "../views/simonGame";

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
                    <SimonGame />
                </Route>
            </Switch>
        </>
    );
}
