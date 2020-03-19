import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi-browser';
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
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null
    };

    // componentDidMount() {
    //     const promise = axios
    //         .get(
    //             "https://mongodb+srv://ihsan-mvp:IhsanMVP123@cluster0-lt6bw.mongodb.net/test?retryWrites=true&w=majority"
    //         )
    //         .catch(err => console.log(err));
    //     console.log(promise);
    // }

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
            console.log(this.state.data);
                            }
    }
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }
    getDataFromDb = () => {
        fetch("http://localhost:5000").then(data => data.json())
        .then(res => this.setState({ data: res.data }));
        // console.log("Hello");
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