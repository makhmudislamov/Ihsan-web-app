import React, { Component } from 'react';
import Navbar from './components/navBar';
import Footer from './components/footer';
// import LoginForm from './components/forms/loginForm'

class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar /> 
                    <main className="container">
                        
                    </main>          
                <Footer />        
            </React.Fragment>
         );
    }
}
 
export default App;