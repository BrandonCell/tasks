import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [student, setStudentName] = useState<string>("Your Name");
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateStudentName(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setStudentName(event.target.value);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="studentName">
                <Form.Control
                    type="text"
                    value={student}
                    onChange={updateStudentName}
                    disabled={!isEditMode}
                    hidden={!isEditMode}
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="isStudent"
                label="Is Student? (note can only change in edit mode)"
                checked={isStudent}
                onChange={updateIsStudent}
                hidden={!isEditMode}
            />
            <Form.Check
                type="switch"
                id="isEditMode"
                label="Toggle Edit Mode"
                checked={isEditMode}
                onChange={updateEditMode}
            />
            <div>
                {student} {isStudent ? " is a student" : " is not a student"}
            </div>
        </div>
    );
}
