import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, changeInProgress] = useState<boolean>(false);

    function decreaseAttempts(): void {
        setNumAttempts(numAttempts - 1);
        //since onClick can only call one function I tied
        //flipProgress and decreaseAttempts together because start attempt
        //both of them called
        flipProgress();
    }
    function increaseAttempts(): void {
        setNumAttempts(numAttempts + 1);
    }
    function flipProgress(): void {
        changeInProgress(!inProgress);
    }
    return (
        <div>
            <button
                onClick={decreaseAttempts}
                disabled={numAttempts === 0 || inProgress}
            >
                Start Quiz
            </button>
            <button onClick={flipProgress} disabled={!inProgress}>
                Stop Quiz
            </button>
            <button onClick={increaseAttempts} disabled={inProgress}>
                Mulligan
            </button>
            {"Number of Attempts: " + numAttempts}
        </div>
    );
}
