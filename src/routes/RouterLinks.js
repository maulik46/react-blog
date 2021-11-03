import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "../views/index";
import NumberGame from "../views/NumberGame";
import SimonGame from "../views/simonGame";
import PersonDoesNotExist from "../views/PersonDoesNotExist";
import StonePaperScissors from "../views/StonePaperScissors";
import TicTacToe from "../views/TicTacToe";
import MemoryGame from "../views/MemoryGame";

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
                <Route path="/stone-paper-scissors">
                    <StonePaperScissors pageTitle="Stone Paper Scissors" />
                </Route>
                <Route path="/tic-tac-toe">
                    <TicTacToe pageTitle="Tic Tac Toe" />
                </Route>
                <Route path="/memory-game">
                    <MemoryGame pageTitle="Memory Game" />
                </Route>
            </Switch>
        </>
    );
}
