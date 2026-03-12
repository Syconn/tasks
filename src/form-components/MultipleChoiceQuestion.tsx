import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Select value={selectedAnswer} onChange={updateAnswer}>
                {options.map((answer: string) => (
                    <option key={answer} value={answer}>
                        {answer}
                    </option>
                ))}
            </Form.Select>

            <span>
                Your Answer is {selectedAnswer === expectedAnswer ? "✔️" : "❌"}
            </span>
        </div>
    );
}
