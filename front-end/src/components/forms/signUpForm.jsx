import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Input from './common/input';

class SignUpForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
            passwordConfirm: ""
        },
        errors: {}
    };

    validate = () => {
        const errors = {};
        const { account } = this.state;
        if (account.username.trim() === "") {
            errors.username = "Username is required";
        }
        if (account.password.trim() === "") {
            errors.password = "Password is required";
        }
        if (account.passwordConfirm.trim() === "") {
            errors.passwordConfirm = "Please confirm your password";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        console.log("Signed Up");
    };

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    };

    render() {
        const { account, errors } = this.state;
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
                    <Form onSubmit={this.handleSubmit}>
                        <Input
                            name="username"
                            value={account.username}
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
                            value={account.password}
                            label="Password"
                            onChange={this.handleChange}
                            placeholder="Enter Password"
                            error={errors.password}
                        />
                        <Input
                            name="passwordConfirm"
                            value={account.passwordConfirm}
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
