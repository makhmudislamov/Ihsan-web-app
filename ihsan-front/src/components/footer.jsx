import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer class="nav flex-column">
                <a class="nav-link active" href="#">Contact Us</a>
                <li class="nav-item dropdown " >
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" type="button" aria-haspopup="true" aria-expanded="false">Change Language</a>
                    <div class="dropdown-menu" >
                        <a class="dropdown-item" href="#">RUS</a>
                        <a class="dropdown-item" href="#">UZB</a>
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