import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import Joi from 'joi-browser';
import Navbar from './components/navBar';
import Footer from './components/footer';
import HomePage from './components/homePage';
import CampaignDetails from "./components/campaignDetails";
import AllCampaigns from './components/allCampaigns';
import NotFound from './components/notFound';
import LoginForm from './components/forms/loginForm';
import SignUpForm from './components/forms/signUpForm';
import CampaignForm from './components/forms/campaignForm';


class App extends Component {
    state = {
        // data: [],
        // id: 0,
        // message: null,
        // intervalIsSet: false,
        // idToDelete: null,
        // idToUpdate: null,
        // objectToUpdate: null
    };

    // async componentDidMount() {
    //     const { data: campaigns } = await axios
    //         .get("http://localhost:5000/home")
    //         .catch(err => console.log(err));
    //     console.log(campaigns);
    //     this.setState({campaigns})
    // }

    // componentDidMount() {
    //     this.getDataFromDb();
    //     if (!this.state.intervalIsSet) {
    //         let interval = setInterval(this.getDataFromDb, 1000);
    //         this.setState({ intervalIsSet: interval });
    //         console.log(this.state.data);
    //     }
    // }
    // componentWillUnmount() {
    //     if (this.state.intervalIsSet) {
    //         clearInterval(this.state.intervalIsSet);
    //         this.setState({ intervalIsSet: null });
    //     }
    // }
    // getDataFromDb = () => {
    //     fetch("http://localhost:5000/home").then(data => data.json())
    //     .then(res => this.setState({ data: res.data }));
    //     // console.log("Hello");
    // };
    getDataFromDb = () => {
        fetch("http://localhost:5000/home")
            .then(data => data.json())
            .then(json => {
                console.log(json);
                this.setState({ data: json });
            })
            .catch(err => console.log(err.message));
    };
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main className="container">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route
                            exact
                            path="/campaigns"
                            component={AllCampaigns}
                        />
                        <Route
                            exact
                            path="/campaigns/new"
                            component={CampaignForm}
                        />
                        <Route
                            exact
                            path="/campaigns/:id"
                            component={CampaignDetails}
                        />
                        <Route path="/login" exact component={LoginForm} />
                        <Route path="/signup" exact component={SignUpForm} />
                        <Route path="/not-found" exact component={NotFound} />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default App;