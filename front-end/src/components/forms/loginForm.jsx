import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import Input from './common/input';
import FormMethods from './common/form';

class LoginForm extends FormMethods {
    state = { 
        data: {
            username: "",
            password: ""
        },
        errors: {}
    }

    doSubmit = () => {
        // call the server
        console.log("Logged In")
    }

    
    render() {
        const { data, errors } = this.state
        return (
            // add paddingleft and padding top
            <Card
                style={{
                    width: "30rem",
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Input
                            name="username"
                            value={data.username}
                            label="Email"
                            onChange={this.handleChange}
                            placeholder="Enter Email"
                            error={errors.username}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Input
                            name="password"
                            value={data.password}
                            label="Password"
                            onChange={this.handleChange}
                            placeholder="Enter Password"
                            error={errors.password}
                        />
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Keep me logged in"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" to="/">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default LoginForm;
