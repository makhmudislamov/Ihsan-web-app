import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

const TextArea = ({rows="3", name, label, placeholder, value, onChange }) => {
    return (

        <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label for={name}>{label}</Form.Label>
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
        </Form.Group>
    );
};

export default TextArea;
