import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import NewCampaign from './newCampaign'
class HomePage extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                <h2>
                    This is landing page and all posted campaigns will be here
                </h2>
                <Link to="/new">
                    New Campaign
                </Link>
            </React.Fragment>
        );
    }
}
 
export default HomePage;