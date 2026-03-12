import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("0");

    const adder = () => {
        const num = parseInt(requestedAttempts);
        if (num) setAttemptsLeft(attemptsLeft + num);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Left: {attemptsLeft}</span>
            <br />
            <input
                type={"number"}
                value={requestedAttempts}
                onChange={(e) => {
                    setRequestedAttempts(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                Use
            </button>
            <button onClick={adder}>Gain</button>
        </div>
    );
}
