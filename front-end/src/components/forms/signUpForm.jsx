import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Joi from "joi-browser";
import Input from './common/input';
import FormMethods from './common/form';

class SignUpForm extends FormMethods {
    state = {
        data: {
            username: "",
            password: "",
            passwordConfirm: ""
        },
        errors: {}
    };

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required(),
        passwordConfirm: Joi.string().required()
    };

    doSubmit = () => {
        // call ther server
        console.log("Signed Up");
    };

    render() {
        const { data, errors } = this.state;
        return (
            <Card
                style={{
                    width: "30rem",
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Card.Body>
                    <Card.Title>Create data</Card.Title>
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
                        <Input
                            name="passwordConfirm"
                            value={data.passwordConfirm}
                            label="Confirm Password"
                            onChange={this.handleChange}
                            placeholder="Confirm Password"
                            error={errors.passwordConfirm}
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

export default SignUpForm;
