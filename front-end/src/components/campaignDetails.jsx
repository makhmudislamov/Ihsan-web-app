import React, { Component } from 'react';

class CampaignDetails extends Component {
    // state = {  }
    handleSave = () => {
        // this.props.history.push(`/campaigns/${this.campaign._id}`)
    }
    render() { 
        return ( 
            <React.Fragment>
                <h2>One campaign details are here</h2>

                <button onClick={this.handleSave}>Save</button>
            </React.Fragment>
         );
    }
}
 
export default CampaignDetails;