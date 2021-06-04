import React, { useEffect, useState } from "react";
import BlogModel from "../components/BlogModel";
import BackDrop from "../components/BackDrop";
import "../assets/css/simonGameCss.css";

export default function SimonGame({ pageTitle }) {
    let [gameLevel, setGameLevel] = useState(0);
    let [isGameOn, setisGameOn] = useState(false);
    let [isCheckOn, setisCheckOn] = useState(true);
    let [sequence, setSequence] = useState(
        [1, 2, 3, 4].sort(() => Math.random() - 0.5)
    );
    let [userSequence, setUserSequence] = useState([]);
    let [startBtnText, setStartBtnText] = useState("Start");
    let [myHighScore, setMyHighScore] = useState(
        localStorage.getItem("my_high_score") || 0
    );
    let [errorMsg, setErrorMsg] = useState({ message: null, status: false });
    const [isOpenModel, setOpenModel] = useState(false);

    const numberGameHelp = {
        title: "How to play?",
        description: `<strong>1.</strong> First press the start button.<br/>
        <strong>2.</strong> Remember the sequence of the color tiles.<br/>
        <strong>3.</strong> Then press the color tiles according to generated sequence.<br/>
        <strong>4.</strong> If your sequence is matched with generated sequence, you will go to the next round.<br/>
        <strong>5.</strong> After your sequence matched press the next round button.<br/>
        <strong>6.</strong> To reset your highscore press the reset button. <br/>
        `,
    };

    useEffect(() => {
        document.title = pageTitle;
        if (errorMsg.message) {
            setTimeout(() => {
                setErrorMsg({ message: null, status: false });
            }, 2500);
        }
    }, [errorMsg, pageTitle]);
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
                // alert("Correct");
                setErrorMsg({
                    message: "Your answer is correct.!",
                    status: true,
                });
                document.querySelector("#startBtn").textContent = "Next Round";

                setStartBtnText("Next Round");
                setGameLevel(gameLevel + 1);

                let myHighScore = localStorage.getItem("my_high_score");
                if (myHighScore < gameLevel + 1) {
                    localStorage.setItem(
                        "my_high_score",
                        JSON.stringify(gameLevel + 1)
                    );
                }

                setMyHighScore(gameLevel + 1);

                setUserSequence([]);
                const createSequence = Math.floor(Math.random() * (4 - 1)) + 1;
                // console.log({ createSequence });
                setSequence([...sequence, createSequence]);
            } else {
                // alert("In-Correct");

                setErrorMsg({
                    message: "Your answer is in-correct.!",
                    status: false,
                });
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
            // alert("Please Click the Tiles..!");
            setErrorMsg({
                message: "Please click the color tiles..!",
                status: false,
            });
        }
    }

    function userClickValue(value) {
        setUserSequence([...userSequence, value]);
    }

    function resetHighScore() {
        console.log("Cleared");
        localStorage.removeItem("my_high_score");
        setMyHighScore(0);
    }

    return (
        <React.Fragment>
            <div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <div
                        className="card col-lg-5 col-md-6 col-11 pb-4 rounded shadow-sm"
                        style={{ backgroundColor: "#f9f9f9" }}
                    >
                        <div className="card-header navbar">
                            <h5 className="text-center fw-bold">
                                Level {gameLevel === 0 ? 1 : gameLevel}
                            </h5>
                            <div className="text-center fw-bold">
                                My Highest Score{" "}
                                <span className="bg-dark text-white px-2 rounded">
                                    {localStorage.getItem("my_high_score") ||
                                        myHighScore}
                                </span>
                            </div>
                        </div>
                        {errorMsg.message && (
                            <div
                                className={`alert  mx-4 mt-3 mb-0 ${
                                    errorMsg.status
                                        ? `alert-success`
                                        : `alert-danger`
                                }`}
                            >
                                <span>{errorMsg.message}</span>
                            </div>
                        )}

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
                        <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                            {!isGameOn && (
                                <button
                                    type="button"
                                    id="startBtn"
                                    onClick={startGame}
                                    className="btn btn-info px-5 my-1 mx-2 py-2 text-white fw-bold col-11"
                                    disabled={isGameOn}
                                >
                                    {startBtnText}
                                </button>
                            )}

                            {!isGameOn && gameLevel === 0 && (
                                <button
                                    type="button"
                                    onClick={resetHighScore}
                                    className="btn btn-danger px-5 my-1 mx-2 py-2 text-white fw-bold col-11"
                                >
                                    Reset Score
                                </button>
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

                            <button
                                className="btn btn-link btn-sm text-decoration-none px-5 m-2 pt-1  col-11"
                                onClick={() => setOpenModel(true)}
                            >
                                <strong>How to play?</strong>
                            </button>

                            {isOpenModel && (
                                <BackDrop
                                    model={
                                        <BlogModel
                                            {...numberGameHelp}
                                            onClose={() => setOpenModel(false)}
                                        />
                                    }
                                ></BackDrop>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
