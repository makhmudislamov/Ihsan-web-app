import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import HomePage from './components/homePage';
import CampaignDetails from "./components/campaignDetails";
import AllCampaigns from './components/allCampaigns';
import NotFound from './components/notFound';
import LoginForm from './components/forms/loginForm';
import SignUpForm from './components/forms/signUpForm';
import CampaignForm from './components/forms/campaignForm';
import { Joi } from 'joi-browser';
class App extends Component {
    // state = {  }
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
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default App;