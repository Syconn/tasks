import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => { setEditMode(!editMode) }}
            />

            {!editMode && (
                <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            )}

            {editMode && (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </label>

                    <label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => { setIsStudent(e.target.checked) }}
                        />
                    </label>
                </div>
            )}

        </div>
    );
}
