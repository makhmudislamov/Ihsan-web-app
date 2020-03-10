import { Component } from 'react';
import Joi from "joi-browser";
class FormMethods extends Component {
    state = { data: {}, errors: {} };

    validate = () => {
        const result  = Joi.validate(this.state.data, this.scheme. {abortEarly: false})

        const errors = {};
        const { data } = this.state;
        if (data.username.trim() === "") {
            errors.username = "Username is required";
        }
        if (data.password.trim() === "") {
            errors.password = "Password is required";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    validateProperty = (input) => {

    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };
}
 
export default FormMethods;