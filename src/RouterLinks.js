import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./views/index";
import NumberGame from "./views/NumberGame";
import Contact from "./views/contact-us";

export default function RouterLinks() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/number-game">
                    <NumberGame />
                </Route>
                <Route path="/contact-us">
                    <Contact />
                </Route>
            </Switch>
        </>
    );
}
