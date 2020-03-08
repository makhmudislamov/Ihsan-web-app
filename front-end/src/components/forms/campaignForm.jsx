import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class CampaignForm extends Component {
    // state = {  }
    handleSubmit = e => {
        e.preventDafault();
        // call the server
        console.log("Submitted");
    };
    render() {
        return (
            <Form
                onSubmit={this.handleSubmit}
                style={{
                    marginLeft: "200px",
                    marginTop: "150px"
                }}
            >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Example: Shelter for the homeless"
                    />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="email" placeholder="$0.00" />
                </Form.Group>
                <Button variant="primary" type="submit" to="/">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default CampaignForm;
