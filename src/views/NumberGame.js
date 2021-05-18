import React, { useEffect, useState, useRef } from "react";
import BlogModel from "../components/BlogModel";
import BackDrop from "../components/BackDrop";

export default function NumberGame() {
    const [answerNumber, setAnswerNumber] = useState("");
    const [hint, setHint] = useState("");
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const [turnLeft, setturnLeft] = useState(5);
    const userNumber = useRef();
    const [isOpenModel, setOpenModel] = useState(false);
    const numberGameHelp = {
        title: "Help",
        description: `<strong>1.</strong> First enter number between 1 to 100.<br/>
        <strong>2.</strong> Press Check button to check your answer.<br/>
        <strong>3.</strong> You will get hint every time you press Check button.<br/>
        <strong>4.</strong> You have total 5 turn to check your answer.<br/>
        <strong>5.</strong> To reset game press Reset button.<br/>
        <strong>6.</strong> To find right answer press Answer button. <br/>
        `,
    };

    function generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        document.title = "Number Game";
        const generateNum = generateRandom(1, 100);
        setAnswerNumber(generateNum);
        // console.log({ generateNum });
        setturnLeft(5);
        userNumber.current.value = "";
    }, []);

    function getAnswer() {
        setHint(`Right answer is ${answerNumber}`);
        generateNew();
        userNumber.current.value = "";
    }

    function generateNew() {
        const generateNum = generateRandom(1, 100);
        setAnswerNumber(generateNum);
        setturnLeft(5);
        userNumber.current.value = "";
    }

    function getReset() {
        generateNew();
        setHint("");
        setturnLeft(5);

        userNumber.current.value = "";
    }

    function checkAnswer() {
        const userAnswer = Math.round(Number(userNumber.current.value));

        setIsRightAnswer(false);

        if (userAnswer > 0 && userAnswer <= 100 && turnLeft !== 0) {
            if (userAnswer === answerNumber) {
                setHint(`${answerNumber} is right answer.`);
                setIsRightAnswer(true);
                generateNew();
                setturnLeft(5);
                setTimeout(() => {
                    setHint("");
                }, 3000);
            } else if (userAnswer < answerNumber) {
                setturnLeft(turnLeft - 1);
                if (turnLeft > 1) {
                    if (answerNumber - userAnswer === 1) {
                        const hintNumber = userAnswer;
                        setHint(`Number is greater than ${hintNumber}.`);
                    } else {
                        const hintNumber = generateRandom(
                            userAnswer,
                            answerNumber - 1
                        );
                        setHint(`Number is greater than ${hintNumber}.`);
                    }
                } else {
                    setHint(`You have 0 turn left. Answer is ${answerNumber}`);
                }
            } else if (userAnswer > answerNumber) {
                setturnLeft(turnLeft - 1);
                if (turnLeft > 1) {
                    if (userAnswer - answerNumber === 1) {
                        const hintNumber = userAnswer;
                        setHint(`Number is less than ${hintNumber}.`);
                    } else {
                        const hintNumber = generateRandom(
                            answerNumber + 1,
                            userAnswer
                        );
                        setHint(`Number is less than ${hintNumber}.`);
                    }
                } else {
                    setHint(`You have 0 turn left. Answer is ${answerNumber}`);
                }
            }

            userNumber.current.value = "";
        } else {
            userNumber.current.value = "";
            setHint(`Number must be between 1 to 100.`);
            if (turnLeft === 0) {
                setHint(`You have 0 turn left. Answer is ${answerNumber}`);
            }
        }
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <div className="col-xl-3 col-lg-5 col-md-6 col-12 p-4">
                    {hint && (
                        <div
                            className={`alert 
                            ${
                                isRightAnswer
                                    ? `alert-success`
                                    : `alert-secondary`
                            } 
                            ${
                                turnLeft === 0
                                    ? `alert-danger`
                                    : `alert-secondary`
                            } 
                                `}
                        >
                            <h6 className="mb-0">{hint}</h6>
                        </div>
                    )}

                    <input
                        type="number"
                        className="form-control py-2"
                        ref={userNumber}
                        onKeyPress={(e) => {
                            if (e.which === 13) {
                                checkAnswer();
                            }
                        }}
                        placeholder="Enter number between 1 to 100"
                    />
                    <label style={{ fontSize: "14px" }}>
                        You have <strong>{turnLeft}</strong> turn left
                    </label>
                    <div className="mt-3">
                        <div className="mt-3">
                            <button
                                type="button"
                                onClick={checkAnswer}
                                className="btn btn-success px-3 w-100"
                            >
                                Check
                            </button>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <button
                                    type="button"
                                    onClick={getReset}
                                    className="btn btn-danger w-100 px-3"
                                >
                                    Reset
                                </button>
                            </div>
                            <div className="col-6">
                                <button
                                    type="button"
                                    onClick={getAnswer}
                                    className="btn btn-info w-100 px-3"
                                >
                                    Answer
                                </button>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button
                                className="btn btn-link btn-sm text-decoration-none w-100"
                                onClick={() => setOpenModel(true)}
                            >
                                <strong>How to play?</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
        </React.Fragment>
    );
}
