import React, { Component } from 'react';
import Navbar from './components/navBar';
import Footer from './components/footer';

class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <div>
                <nav>
                    <Navbar />
                </nav>

                <body>
                    <h2>Hello World</h2>
                </body>
                
                <footer>
                    <Footer/>
                </footer>
            </div>
         );
    }
}
 
export default App;