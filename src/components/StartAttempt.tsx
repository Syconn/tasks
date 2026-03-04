import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setInProgress] = useState(false);
    const [attempts, setAttempts] = useState(4);

    const start = () => {
        setInProgress(true)
        setAttempts(prev => prev - 1)
    }

    return (
        <div>
            Start Attempt
            Attempts: {attempts}
            <Button disabled={inProgress || attempts === 0} onClick={start}>Start Quiz</Button>
            <Button disabled={!inProgress} onClick={() => { setInProgress(false) }}>Stop Quiz</Button>
            <Button disabled={inProgress} onClick={() => { setAttempts(prev => prev + 1) }}>Mulligan</Button>
        </div>
    );
}
