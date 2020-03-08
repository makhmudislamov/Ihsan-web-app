import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import NewCampaign from './newCampaign'
class HomePage extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                <h1>Home Page</h1>
                <Link to="/campaigns">All Campaigns</Link>
            </React.Fragment>
        );
    }
}
 
export default HomePage;