import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>

            <input
                onChange={(e) => {
                    setAnswer(e.target.value);
                }}
                value={answer}
            />
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
