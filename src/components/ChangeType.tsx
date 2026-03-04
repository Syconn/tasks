import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>("short_answer_question")

    const toggleQuestionType = () => {
        setQuestionType(prev =>
            prev === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <div>
            Change Type
            <Button onClick={toggleQuestionType}>Change Type</Button>
            <span>{questionType == "short_answer_question" ? "Short Answer" : "Multiple Choice"}</span>
        </div>
    );
}
