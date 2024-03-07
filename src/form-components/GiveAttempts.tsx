import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    function updateAttemptsLeft(value: string): void {
        setAttemptsLeft(value);
    }
    function updateAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setAttemptsRequested(event.target.value);
    }

    return (
        <div>
            <h3>Attempts left: {attemptsLeft}</h3>
            <Form.Group controlId="attemptsLeft">
                <Form.Label>How many attempts you want</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttemptsRequested}
                />
            </Form.Group>
            <Button
                onClick={() =>
                    updateAttemptsLeft((parseInt(attemptsLeft) - 1).toString())
                }
                disabled={attemptsLeft === "0"}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    updateAttemptsLeft(
                        (
                            parseInt(attemptsLeft) +
                            (parseInt(attemptsRequested) || 0)
                        ).toString()
                    )
                }
            >
                gain
            </Button>
        </div>
    );
}
