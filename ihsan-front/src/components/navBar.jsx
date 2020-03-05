import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Company Logo(Back to home)</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>

                    <li class="nav-item dropdown " >
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" type="button" aria-haspopup="true" aria-expanded="false">Account</a>
                        <div class="dropdown-menu" >
                            <a class="dropdown-item" href="#">Login</a>
                            <a class="dropdown-item" href="#">Sign In</a>
                        </div>
                    </li>
                </ul>
           
            </nav>
         );
    }
}
 
export default Navbar;

