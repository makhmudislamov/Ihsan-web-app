import React from "react";
import { Form } from "react-bootstrap";

const TextArea = ({rows="3", name, label, error, placeholder, value, onChange }) => {
    return (
        <Form.Group >
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                as="textarea"
                rows={rows}
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                type="text"
                placeholder={placeholder}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </Form.Group>
    );
};

export default TextArea;
