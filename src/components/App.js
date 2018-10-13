import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import LoginPage from './login';

class App extends Component {
  render() {
    return (
      <div className="sidebar-mini">
        <div className="wrapper">
          <div className='main-panel'>
            <Navbar />
            <div className="content">
              <div className="container-fluid">
              <LoginPage />
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
