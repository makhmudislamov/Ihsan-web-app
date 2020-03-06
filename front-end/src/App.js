import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Footer from './components/footer';
// import LoginForm from './components/forms/loginForm'
import NewCampaign from './components/newCampaign';

class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar /> 
                    <main className="container">
                        <Route path="/new" component={NewCampaign}/>
                        
                    </main>          
                <Footer />        
            </React.Fragment>
         );
    }
}
 
export default App;