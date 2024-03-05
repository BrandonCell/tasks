import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    function rollLeftDie(): void {
        const newNumber = d6();
        setLeftDie(newNumber);
    }
    function rollRightDie(): void {
        const newNumber = d6();
        setRightDie(newNumber);
    }

    return (
        <div>
            <button onClick={rollLeftDie}>Roll Left</button>
            <span data-testid="left-die">{leftDie}</span>
            <button onClick={rollRightDie}>Roll Right</button>
            <span data-testid="right-die">{rightDie}</span>
            {leftDie === rightDie && leftDie === 1 && " You Lose"}
            {leftDie === rightDie && leftDie !== 1 && " You Win"}
        </div>
    );
}
