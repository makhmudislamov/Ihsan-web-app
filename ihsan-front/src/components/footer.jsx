import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="nav flex-column">
                <a className="nav-link active" href="#">Contact Us</a>
                <li className="nav-item dropdown " >
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" type="button" aria-haspopup="true" aria-expanded="false">Change Language</a>
                    <div className="dropdown-menu" >
                        <a className="dropdown-item" href="#">RUS</a>
                        <a className="dropdown-item" href="#">UZB</a>
                    </div>
                </li>
                <div className="social-media">
                    <a href="">Youtube Logo</a>
                    <a href="">Twitter Logo</a>
                    <a href="">Facebook Logo</a>
                    <a href="">Instagram Logo</a>
                </div>
            </footer>
        );
    }
}
 
export default Footer;