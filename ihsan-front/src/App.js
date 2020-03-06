import React, { Component } from 'react';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Login from './components/login'

class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar /> 
                    <main className="container">
                        // <Login />
                        <h2>
                            Hello world
                        </h2>
                    </main>          
                <Footer />        
            </React.Fragment>
         );
    }
}
 
export default App;