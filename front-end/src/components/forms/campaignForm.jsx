import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import Input from './common/input';
import TextArea from "./common/textarea";
import FormMethods from './common/form';

class dataForm extends FormMethods {
    state = {
        data: {
            title: "",
            description: "",
            amount: ""
        },
        errors: {}
    };

    doSubmit = () => {
        // call ther server
        console.log("Created new campaign");
    };

    render() {
        const { data, errors } = this.state;

        return (
            <Card
                style={{
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Card.Body>
                    <Card.Title>Create new data</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Input
                            name="title"
                            value={data.title}
                            label="Title"
                            onChange={this.handleChange}
                            placeholder="Shelter for the homeless"
                            error={errors.title}
                        />
                        <TextArea
                            as="textarea"
                            name="description"
                            value={data.description}
                            label="Description"
                            onChange={this.handleChange}
                            placeholder="Details of your data"
                            error={errors.description}
                        />
                        <Input
                            name="amount"
                            value={data.amount}
                            label="Amount to raise "
                            onChange={this.handleChange}
                            placeholder="$5,000"
                            error={errors.amount}
                        />
                        <Button variant="primary" type="submit" to="/">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default dataForm;
