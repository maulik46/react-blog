import React, { useEffect, useState } from "react";
import BlogModel from "../components/BlogModel";
import BackDrop from "../components/BackDrop";
import "../assets/css/stonePaperScissors.css";

import Rock from "../assets/images/rock.svg";
import Paper from "../assets/images/paper.svg";
import Scissors from "../assets/images/scissors.svg";

export default function StonePaperScissors({ pageTitle }) {
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);
    const stonePaperScissorHelp = {
        title: "How to play?",
        description: `<strong> 1.</strong> First press one button.<br/>
        <strong> 2.</strong> If you choose Stone, you will win against Scissors but lose against Paper.<br/>
        <strong> 3.</strong> If you choose Scissors, you will win against Paper but lose against Stone.<br/>
        <strong> 4.</strong> If you choose Paper, you will win against Stone but lose against Scissors.<br/>
        `,
    };

    let [computerChoice, setComputerChoice] = useState(null);
    let [winner, setWinner] = useState(0);

    let [computerScore, setComputerScore] = useState(0);
    let [userScore, setUserScore] = useState(0);
    let [isOpenModel, setOpenModel] = useState(false);

    useEffect(() => {
        generateRandomChoice();
    }, []);

    function generateRandomChoice() {
        let items = [1, 2, 3];
        let choice = items[Math.floor(Math.random() * items.length)];
        // console.log({ choice });
        setComputerChoice(choice);
    }

    function getResult(event, userSelect) {
        // NOTE:
        //     // 1= Stone
        //     // 2= Paper
        //     // 3= Scissors
        document
            .querySelectorAll(".gameBtn")
            .forEach((element) => element.classList.remove("active"));

        setUserActiveClass(userSelect);
        setComputerActiveClass(computerChoice);

        if (computerChoice !== null) {
            if (userSelect === computerChoice) {
                console.log("Tie");
                setWinner(3);
            } else if (userSelect === 1 && computerChoice === 2) {
                console.log("PC won");
                setComputerScore((computerScore += 1));
                setWinner(1);
            } else if (userSelect === 1 && computerChoice === 3) {
                console.log("User won");
                setUserScore((userScore += 1));
                setWinner(2);
            } else if (userSelect === 2 && computerChoice === 1) {
                console.log("User won");
                setUserScore((userScore += 1));
                setWinner(2);
            } else if (userSelect === 2 && computerChoice === 3) {
                console.log("PC won");
                setComputerScore((computerScore += 1));
                setWinner(1);
            } else if (userSelect === 3 && computerChoice === 1) {
                console.log("PC won");
                setComputerScore((computerScore += 1));
                setWinner(1);
            } else if (userSelect === 3 && computerChoice === 2) {
                console.log("User won");
                setUserScore((userScore += 1));
                setWinner(2);
            }
            generateRandomChoice();
        }
    }

    function setUserActiveClass(type) {
        if (type === 1) {
            document.querySelector("#rockBtn").classList.add("active");
        } else if (type === 2) {
            document.querySelector("#paperBtn").classList.add("active");
        } else if (type === 3) {
            document.querySelector("#scissorsBtn").classList.add("active");
        }
    }
    function setComputerActiveClass(type) {
        if (type === 1) {
            document.querySelector("#computerRockBtn").classList.add("active");
        } else if (type === 2) {
            document.querySelector("#computerPaperBtn").classList.add("active");
        } else if (type === 3) {
            document
                .querySelector("#computerScissorsBtn")
                .classList.add("active");
        }
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center game_container container-fluid">
                <div className="d-flex justify-content-center mt-3 align-content-between flex-wrap bg-light p-2 p-sm-3 rounded shadow-sm game_body border">
                    <div>
                        <div
                            id="computerRockBtn"
                            className="btn btn-light shadow-sm border mx-2 gameBtn pointer-events-none"
                        >
                            <img
                                src={Rock}
                                alt="Rock"
                                height="70px"
                                width="70px"
                                draggable="false"
                            />
                        </div>
                        <div
                            id="computerPaperBtn"
                            className="btn btn-light shadow-sm border mx-2 gameBtn pointer-events-none"
                        >
                            <img
                                src={Paper}
                                alt="Paper"
                                height="70px"
                                width="70px"
                                draggable="false"
                            />
                        </div>
                        <div
                            id="computerScissorsBtn"
                            className="btn btn-light shadow-sm border mx-2 gameBtn pointer-events-none"
                        >
                            <img
                                src={Scissors}
                                alt="Scissors"
                                height="70px"
                                width="70px"
                                draggable="false"
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center px-2">
                            <div className="fw-bold">
                                Score: {computerScore}
                            </div>
                            <div>
                                <div className="fw-bold">
                                    Computer
                                    {winner === 1 ? (
                                        <span className="text-success">
                                            &nbsp;Won
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                    {winner === 2 ? (
                                        <span className="text-danger">
                                            &nbsp;Lose
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                    {winner === 3 ? (
                                        <span className="text-info"> Tie</span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 style={{ color: "#c0c0c0" }}>
                            Stone Paper Scissor
                        </h6>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center px-2">
                            <div className="fw-bold">Score: {userScore}</div>
                            <div className="fw-bold">
                                You
                                {winner === 1 ? (
                                    <span className="text-danger"> Lose</span>
                                ) : (
                                    ""
                                )}
                                {winner === 2 ? (
                                    <span className="text-success"> Won</span>
                                ) : (
                                    ""
                                )}
                                {winner === 3 ? (
                                    <span className="text-info"> Tie</span>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <button
                            onClick={(event) => getResult(event, 1)}
                            id="rockBtn"
                            className="btn btn-light shadow-sm border mx-2 gameBtn"
                        >
                            <img
                                src={Rock}
                                alt="Rock"
                                height="70px"
                                width="70px"
                                draggable="false"
                            />
                        </button>
                        <button
                            onClick={(event) => getResult(event, 2)}
                            id="paperBtn"
                            className="btn btn-light shadow-sm border mx-2 gameBtn"
                        >
                            <img
                                src={Paper}
                                alt="Paper"
                                height="70px"
                                width="70px"
                                draggable="false"
                            />
                        </button>
                        <button
                            onClick={(event) => getResult(event, 3)}
                            id="scissorsBtn"
                            className="btn btn-light shadow-sm border mx-2 gameBtn"
                        >
                            <img
                                src={Scissors}
                                alt="Scissors"
                                height="70px"
                                width="70px"
                                draggable="false"
                            />
                        </button>
                    </div>
                </div>
                <button
                    className="btn btn-link btn-sm text-decoration-none px-5 m-2 pt-1"
                    onClick={() => setOpenModel(true)}
                    style={{ width: "380px" }}
                >
                    <strong>How to play?</strong>
                </button>

                {isOpenModel && (
                    <BackDrop
                        model={
                            <BlogModel
                                {...stonePaperScissorHelp}
                                onClose={() => setOpenModel(false)}
                            />
                        }
                    ></BackDrop>
                )}
            </div>
        </>
    );
}
