import React, { Component } from 'react';
import Navbar from './components/navBar';

class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <div>
                <nav>
                    <Navbar />
                </nav>
            </div>
         );
    }
}
 
export default App;