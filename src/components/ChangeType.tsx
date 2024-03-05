import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipQuestionType(): void {
        if (questionType === "multiple_choice_question") {
            setQuestionType("short_answer_question");
        } else {
            setQuestionType("multiple_choice_question");
        }
    }

    return (
        <div>
            <Button onClick={flipQuestionType}>Change Type</Button>
            {questionType === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
