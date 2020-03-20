import React from "react";
import { Card, Form } from "react-bootstrap";
import Joi from "joi-browser";
import axios from "axios";
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

    doSubmit = async () => {
        // call ther server
        
            // let currentIds = this.state.data.map(data => data._id);
            // console.log(currentIds);
            
            // let idToBeAdded = 0;
            // while (currentIds.includes(idToBeAdded)) {
            //     ++idToBeAdded;
            // }

            
            // const { data: campaign } = await axios.post(
                //     "http://localhost:5000/campaigns"
                // );
                
            const campaign = this.state.data;
            await axios.post(
                "http://localhost:5000/campaigns",
                campaign
            );
        console.log("Created new campaign", campaign);
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
                    <Card.Title>Create new campaign</Card.Title>
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
