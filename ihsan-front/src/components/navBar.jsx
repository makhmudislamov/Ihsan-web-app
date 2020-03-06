import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Company Logo(Back to home)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FAQ</a>
                    </li>

                    <li className="nav-item dropdown " >
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" type="button" aria-haspopup="true" aria-expanded="false">Account</a>
                        <div className="dropdown-menu" >
                            <a className="dropdown-item" href="#">Login</a>
                            <a className="dropdown-item" href="#">Sign In</a>
                        </div>
                    </li>
                </ul>
           
            </nav>
         );
    }
}
 
export default Navbar;

