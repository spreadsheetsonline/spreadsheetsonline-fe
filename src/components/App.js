import React, { Component } from 'react';
import Sidebar from './sidebar'
import Navbar from './navbar';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="sidebar-mini">
        <div className="wrapper">
          <Sidebar />
          <div className='main-panel'>
            <Navbar />
            <div className="content">
              <div className="container-fluid">
                Hello
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
