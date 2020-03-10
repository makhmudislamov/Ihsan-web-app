import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Input from './common/input';
import TextArea from "./common/textarea";

class CampaignForm extends Component {
    state = {
        campaign: {
            title: "",
            description: "",
            amount: ""
        },
        errors: {}
    };

    validate = () => {
        const errors = {};
        const { campaign } = this.state;
        if (campaign.title.trim() === "") {
            errors.title = "Title is required";
        }
        if (campaign.description.trim() === "") {
            errors.description = "Description is required";
        }
        if (campaign.amount.trim() === "") {
            errors.amount = "Funding amount is required";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        console.log("Submitted");
    };

    handleChange = ({ currentTarget: input }) => {
        const campaign = { ...this.state.campaign };
        campaign[input.name] = input.value;
        this.setState({ campaign });
    };
    render() {
        const { campaign, errors } = this.state;

        return (
            <Card
                style={{
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Card.Body>
                    <Card.Title>Create new campaign</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Input
                            name="title"
                            value={campaign.title}
                            label="Title"
                            onChange={this.handleChange}
                            placeholder="Shelter for the homeless"
                            error={errors.title}
                        />
                        <TextArea
                            as="textarea"
                            name="description"
                            value={campaign.description}
                            label="Description"
                            onChange={this.handleChange}
                            placeholder="Details of your campaign"
                            error={errors.description}
                        />
                        <Input
                            name="amount"
                            value={campaign.amount}
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

export default CampaignForm;
