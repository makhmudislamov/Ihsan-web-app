import React, { Component } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";
import { Toute } from 'react-router-dom';

class SignUpForm extends Component {
    // state = {  }
    render() {
        return (
            <Card
                style={{
                    width: "30rem",
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Card.Body>
                    <Card.Title>Create Account</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Keep me logged in"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            to="/"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default SignUpForm;
