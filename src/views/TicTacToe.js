import React, { useEffect, useState } from "react";
import "../assets/css/ticTacToe.css";

export default function TicTacToe({ pageTitle }) {
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);
    const emptyState = ["", "", "", "", "", "", "", "", ""];
    const [activeUser, setActiveUser] = useState("O");
    const [winnerUser, setWinnerUser] = useState({
        winner: null,
        winningMessage: "",
    });
    const [gameState, setGameState] = useState(emptyState);
    const [gameActive, setGameActive] = useState(true);

    const handleResultValidation = () => {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];

            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];

            if (a === "" || b === "" || c === "") {
                continue;
            } else if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            let getWinner = activeUser === "O" ? "X" : "O";
            setWinnerUser({
                winner: getWinner,
                winningMessage: `${getWinner} won the match`,
            });
            setGameActive(false);
            setGameState(emptyState);
            setActiveUser("O");
        } else {
            const usedState = gameState.filter((item) => item !== "").length;

            if (usedState === 9) {
                setWinnerUser({
                    winner: "Tie",
                    winningMessage: "Match Tie",
                });
                setGameActive(false);
                setGameState(emptyState);
                setActiveUser("O");
            }
        }
    };

    const handleUserClick = (index) => {
        let setUser = activeUser === "O" ? "X" : "O";
        document.querySelector("#tile_" + index).innerHTML = setUser;
        setActiveUser(setUser);
        document.querySelector("#tile_" + index).disabled = true;
        gameState[index] = setUser;
        setGameState([...gameState]);
        handleResultValidation();
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "90vh" }}
        >
            {gameActive && (
                <div className="ticTac-container p-1 ">
                    <div className="d-flex justify-content-between align-items-center">
                        <div
                            className={`px-3 py-2 fw-bold border text-center col-4 ${
                                activeUser === "X" ? `active-user` : ``
                            }`}
                        >
                            O
                        </div>

                        <div
                            className={`px-3 py-2 fw-bold border text-center col-4 ${
                                activeUser === "O" ? `active-user` : ``
                            }`}
                        >
                            X
                        </div>
                    </div>
                    <div className="row mt-1 mx-0 tictac-playarea">
                        {[...Array(9).keys()].map((index) => (
                            <div className="col-4 p-1" key={index}>
                                <button
                                    id={`tile_${index}`}
                                    className="btn btn-default rounded-0 col-12 text-center shadow-sm ticTac-tiles"
                                    onClick={() => handleUserClick(index)}
                                ></button>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <h5 className="mb-0">Tic Tac Toe</h5>
                        <span className="form-text">For Two Players</span>
                    </div>
                </div>
            )}
            {!gameActive && (
                <div className="text-center p-3 border shadow-sm rounded-2">
                    {winnerUser.winner && (
                        <div className="px-3 py-2 fw-bold border m-4">
                            {winnerUser.winningMessage}
                        </div>
                    )}

                    <button
                        className="btn btn-success px-4 py-2 fw-bold"
                        onClick={() => {
                            setWinnerUser({
                                winner: null,
                                winningMessage: "",
                            });
                            setGameActive(true);
                        }}
                    >
                        Restart Game
                    </button>
                </div>
            )}
        </div>
    );
}
