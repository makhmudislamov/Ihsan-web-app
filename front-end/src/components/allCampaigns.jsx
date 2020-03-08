import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllCampaigns extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h2>
                    All posted campaigns will be here
                </h2>
                <Link to="/campaigns/new">New Campaign</Link>
            </React.Fragment>
        );
    }
}
 
export default AllCampaigns;