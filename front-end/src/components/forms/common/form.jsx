import { Component } from 'react';

class FormMethods extends Component {
    state = { data: {}, errors: {} };

    validate = () => {
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

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    };
}
 
export default FormMethods;