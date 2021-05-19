import React, { useState } from "react";
import "../assets/css/simonGameCss.css";

export default function SimonGame() {
    let [gameLevel, setGameLevel] = useState(0);
    let [isGameOn, setisGameOn] = useState(false);
    let [isCheckOn, setisCheckOn] = useState(true);
    let [sequence, setSequence] = useState(
        [1, 2, 3, 4].sort(() => Math.random() - 0.5)
    );
    let [userSequence, setUserSequence] = useState([]);
    let [startBtnText, setStartBtnText] = useState("Start");
    let [myHighScore, setMyHighScore] = useState(0);

    function startGame() {
        setisGameOn(true);

        disabledTiles();
        sequence.forEach((value, index) => {
            setTimeout(() => {
                activeButton(value);
            }, (index + 1) * 700);
        });

        setTimeout(() => {
            setisCheckOn(false);
            document
                .querySelectorAll(".buttonTile")
                .forEach((item) => item.classList.remove("disabled"));
        }, sequence.length * 900);

        // console.log("Started");
    }

    function disabledTiles() {
        document
            .querySelectorAll(".buttonTile")
            .forEach((item) => item.classList.add("disabled"));
    }

    function activeButton(btn) {
        let getBtn = document.querySelector(`#tile_btn${btn}`);
        getBtn.classList.add("active");

        setTimeout(() => {
            getBtn.classList.remove("active");
        }, 300);
    }

    function checkGame() {
        if (userSequence.length > 0) {
            // console.log({ userSequence });
            const userValueString = userSequence.join("");
            const sequenceValueString = sequence.join("");
            if (userValueString === sequenceValueString) {
                alert("Correct");
                document.querySelector("#startBtn").textContent = "Next Round";

                setStartBtnText("Next Round");
                setGameLevel(gameLevel + 1);

                localStorage.setItem(
                    "my_high_score",
                    JSON.stringify(gameLevel + 1)
                );

                setMyHighScore(gameLevel + 1);

                setUserSequence([]);
                const createSequence = Math.floor(Math.random() * (4 - 1)) + 1;
                // console.log({ createSequence });
                setSequence([...sequence, createSequence]);
            } else {
                alert("In-Correct");
                document.querySelector("#startBtn").textContent = "Start Again";

                setStartBtnText("Start Again");
                setGameLevel(0);
                setUserSequence([]);
                const newSquence = [2, 3, 1, 4].sort(() => Math.random() - 0.5);

                setSequence([...newSquence]);
            }
            setisGameOn(false);
            disabledTiles();

            setisCheckOn(true);
        } else {
            alert("Please Click the Tiles..!");
        }
    }

    function userClickValue(value) {
        setUserSequence([...userSequence, value]);
    }

    // function resetHighScore() {
    //     console.log("Cleared");
    //     localStorage.removeItem("my_high_score", "0");
    //     setMyHighScore(0);
    // }

    return (
        <React.Fragment>
            <div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <div
                        className="col-lg-5 col-md-6 col-11 px-2 py-4 rounded shadow-sm"
                        style={{ backgroundColor: "#e2e2e2" }}
                    >
                        <h5 className="text-center fw-bold">
                            Level {gameLevel === 0 ? 1 : gameLevel}
                        </h5>
                        <div className="text-center fw-bold">
                            My Highest Score{" "}
                            {myHighScore ||
                                localStorage.getItem("my_high_score") ||
                                0}
                        </div>
                        <div className="row justify-content-around align-items-center mx-0">
                            <div
                                id="tile_btn1"
                                onClick={() => userClickValue(1)}
                                className="col-5  bg-danger my-4 buttonTile disabled"
                            ></div>
                            <div
                                id="tile_btn2"
                                onClick={() => userClickValue(2)}
                                className="col-5  bg-success my-4 buttonTile disabled"
                            ></div>
                            <div
                                id="tile_btn3"
                                onClick={() => userClickValue(3)}
                                className="col-5  bg-primary my-4 buttonTile disabled"
                            ></div>
                            <div
                                id="tile_btn4"
                                onClick={() => userClickValue(4)}
                                className="col-5  bg-dark my-4 buttonTile disabled"
                            ></div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            {!isGameOn && (
                                <div className="col-11">
                                    <button
                                        type="button"
                                        id="startBtn"
                                        onClick={startGame}
                                        className="btn btn-info px-5 my-2 mx-2 py-2 text-white fw-bold col-12"
                                        disabled={isGameOn}
                                    >
                                        {startBtnText}
                                    </button>
                                    {/* <button
                                        type="button"
                                        onClick={resetHighScore}
                                        className="btn btn-danger px-5 my-2 mx-2 py-2 text-white fw-bold col-12"
                                        disabled={isGameOn}
                                    >
                                        Reset Score
                                    </button> */}
                                </div>
                            )}

                            {!isCheckOn && (
                                <button
                                    type="button"
                                    id="startBtn"
                                    onClick={checkGame}
                                    className="btn btn-success px-5 mx-2 py-2 text-white fw-bold col-11"
                                    disabled={isCheckOn}
                                >
                                    Check
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
