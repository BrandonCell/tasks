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
            <Button
                onClick={decreaseAttempts}
                disabled={numAttempts === 0 || inProgress}
            >
                Start Quiz
            </Button>
            <Button onClick={flipProgress} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={increaseAttempts} disabled={inProgress}>
                Mulligan
            </Button>
            {"Number of Attempts: " + numAttempts}
        </div>
    );
}
