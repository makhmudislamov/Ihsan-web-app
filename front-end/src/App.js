import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
import NewCampaign from './components/newCampaign';
import HomePage from './components/homePage';
import LoginForm from './components/forms/loginForm';
import SignUpForm from './components/forms/signUpForm';
class App extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                    <main className="container">
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/new" exact component={NewCampaign} />
                            <Route path="/login" exact component={LoginForm} />
                            <Route path="/signup" exact component={SignUpForm} />
                        </Switch>
                    </main>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default App;