import React, { Component } from 'react';
import { Card, Form, Button } from "react-bootstrap";
const Input = ({ name, label, placeholder, value, onChange }) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label for={name}>{label}</Form.Label>
            <Form.Control
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                type="text"
                placeholder={placeholder}
              
            />
        </Form.Group>
    );
}
 
export default Input;