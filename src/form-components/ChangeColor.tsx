import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors = ["red", "orange", "green", "blue", "yellow", "purple", "pink", "black"]

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((thisColor: string) => (
                    <Form.Check
                        inline={true}
                        key={thisColor}
                        type="radio"
                        onChange={() => { setColor(thisColor) }}
                        id="emotion-check-happy"
                        label={thisColor}
                        value={color}
                        checked={color === thisColor}
                        style={{ backgroundColor: thisColor }}
                    />
                ))}
            </div>
            <span>
                You have chosen
                <span data-testid="colored-box" style={{ backgroundColor: color }}> {color}</span>
            </span>
        </div>
    );
}
