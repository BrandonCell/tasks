import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="Red"
                value="red"
                checked={color === "red"}
                style={{ backgroundColor: "red" }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="Blue"
                value="blue"
                checked={color === "blue"}
                style={{ backgroundColor: "blue" }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="Green"
                value="green"
                checked={color === "green"}
                style={{ backgroundColor: "green" }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="Orange"
                value="orange"
                checked={color === "orange"}
                style={{ backgroundColor: "orange" }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="Purple"
                value="purple"
                checked={color === "purple"}
                style={{ backgroundColor: "purple" }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="Cyan"
                value="cyan"
                checked={color === "cyan"}
                style={{ backgroundColor: "cyan" }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="Magenta"
                value="magenta"
                checked={color === "magenta"}
                style={{ backgroundColor: "magenta" }}
            />
            <Form.Check
                type="radio"
                name="colors"
                onChange={updateColor}
                id="colored-box"
                label="White"
                value="white"
                checked={color === "white"}
                style={{ backgroundColor: "white" }}
            />
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}
            </div>
        </div>
    );
}
