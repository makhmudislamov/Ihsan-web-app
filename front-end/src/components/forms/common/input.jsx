import React from 'react';
import { Form } from "react-bootstrap";
const Input = ({ name, label, placeholder, value, error, onChange }) => {
    return (
        <Form.Group >
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
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
}
 
export default Input;