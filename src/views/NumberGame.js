import React, { useEffect, useState, useRef } from "react";

export default function NumberGame() {
    const [answerNumber, setAnswerNumber] = useState("");
    const [hint, setHint] = useState("");
    const [isRightAnswer, setIsRightAnswer] = useState(false);
    const [turnLeft, setturnLeft] = useState(5);
    const userNumber = useRef();

    function generateRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
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
        const userAnswer = Number(userNumber.current.value);
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
                        setHint(`Number is grator than ${hintNumber}.`);
                    } else {
                        const hintNumber = generateRandom(
                            userAnswer,
                            answerNumber - 1
                        );
                        setHint(`Number is grator than ${hintNumber}.`);
                    }
                } else {
                    setHint(`You have 0 turn left.`);
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
                    setHint(`You have 0 turn left.`);
                }
            }

            userNumber.current.value = "";
        } else {
            userNumber.current.value = "";
            setHint(`Number must be between 1 to 100.`);
            if (turnLeft === 0) {
                setHint(`You have 0 turn left.`);
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
                        className="form-control"
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
                        <button
                            type="button"
                            onClick={checkAnswer}
                            className="btn btn-success px-3"
                        >
                            Check
                        </button>
                        <button
                            type="button"
                            onClick={getReset}
                            className="btn btn-danger px-3 mx-2"
                        >
                            Reset
                        </button>
                        <button
                            type="button"
                            onClick={getAnswer}
                            className="btn btn-info px-3"
                        >
                            Answer
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
