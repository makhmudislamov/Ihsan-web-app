import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';
import HomePage from './homePage';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">
                            Company Logo(Back to home)
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            FAQ
                        </Link>
                    </li>

                    <li className="nav-item dropdown ">
                        <Link
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            to="#"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >
                            Account
                        </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/login">
                                Login
                            </Link>
                            <Link className="dropdown-item" to="/signup">
                                Sign Up
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;

