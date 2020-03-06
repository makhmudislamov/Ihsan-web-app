import React, { Component } from 'react';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Login from './components/login'

class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <div>
                <Navbar /> 
                <Login />          
                <Footer />     
                    
            </div>
         );
    }
}
 
export default App;