import React, { Component } from 'react';
import { Card, Form, Button } from "react-bootstrap";
const Input = ({ name, label, value, onChange }) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label for={name}>{label}</Form.Label>
            <Form.Control
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                type="text"
                placeholder="Enter email"
            />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
    );
}
 
export default Input;