import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎃");
    function nextAlphabetical(): void {
        let newString = "";
        if (holiday === "🎃") {
            newString = "🦃";
        } else if (holiday === "🎄") {
            newString = "🐇";
        } else if (holiday === "🦃") {
            newString = "🎄";
        } else if (holiday === "🐇") {
            newString = "🎆";
        } else if (holiday === "🎆") {
            newString = "🎃";
        }
        setHoliday(newString);
    }

    function nextYear(): void {
        let newString = "";
        if (holiday === "🎃") {
            newString = "🦃";
        } else if (holiday === "🎄") {
            newString = "🐇";
        } else if (holiday === "🦃") {
            newString = "🎄";
        } else if (holiday === "🐇") {
            newString = "🎆";
        } else if (holiday === "🎆") {
            newString = "🎃";
        }
        setHoliday(newString);
    }
    return (
        <div>
            {"Holiday: " + holiday}
            <button onClick={nextAlphabetical}>Advance by Alphabet</button>
            <button onClick={nextYear}>Advance by Year</button>
        </div>
    );
}
