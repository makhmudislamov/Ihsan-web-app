import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class AllCampaigns extends Component {
    state = {
        campaigns: []
    };

    async componentDidMount() {
        const { data: campaigns } = await axios
            .get("http://localhost:5000/home")
            .catch(err => console.log(err));
        console.log(campaigns);
        this.setState({ campaigns });
    }

    handleAdd = () => {
        console.log("Add");
    };

    handleUpdate = campaign => {
        console.log("Update", campaign);
    };

    handleDelete = campaign => {
        console.log("Delete", campaign);
    };

    render() {
        return (
            <React.Fragment>
                <h2>All posted campaigns will be here</h2>
                <Link to="/campaigns/new">New Campaign</Link>
                {/* <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.campaigns.map(campaign => (
                            <tr key={campaign.id}>
                                <td>{campaign.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() =>
                                            this.handleUpdate(campaign)
                                        }
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            this.handleDelete(campaign)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default AllCampaigns;