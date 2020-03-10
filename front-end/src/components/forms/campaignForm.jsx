import React from "react";
import { Card, Form } from "react-bootstrap";
import Joi from "joi";
import Input from './common/input';
import TextArea from "./common/textarea";
import FormMethods from './common/formMethods';
class CampaignForm extends FormMethods {
    state = {
        data: {
            title: "",
            description: "",
            amount: ""
        },
        errors: {}
    };

    schema = {
        title: Joi.string()
            .required()
            .label("Title"),
        description: Joi.string()
            .required()
            .label("Description"),
        amount: Joi.string()
            .required()
            .label("Amount") // later change this to int or float
    };

    doSubmit = () => {
        // call ther server
        console.log("Created new campaign");
    };

    render() {
        

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
                        {this.renderInput(
                            "title",
                            "Title",
                            "Shelter for the homeless"
                        )}
                        {this.renderTextArea(
                            "description",
                            "Description",
                            "Details of your campaign"
                        )}
                        {this.renderInput("amount", "Amount", "$5,000")}
                        {this.renderButton("Submit")}
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default CampaignForm;
