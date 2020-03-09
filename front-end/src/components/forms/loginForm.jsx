import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Input from './common/input';

class LoginForm extends Component {
    state = { 
        account: {
            username: "",
            password: ""
        }
     }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Logged In")
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });

    }
    render() {
        const { account } = this.state
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
                            value={account.username}
                            label="Email"
                            onChange={this.handleChange}
                            placeholder="Enter Email"
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
