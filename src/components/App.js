import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import LoginPage from './login';
import Callback from './callback';
import { Profile } from './profile';
import SecuredRoute from './securedRoute'

class App extends Component {

  render() {
    return (
      <div className="sidebar-mini">
        <div className="wrapper">
          <div className='main-panel'>
            <Navbar />
            <div className="content">
              <div className="container-fluid">
            <Route exact path='/callback' component={Callback}/>
            <SecuredRoute path="/profile" component={Profile} />
                <Route exact path="/" component={LoginPage} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
