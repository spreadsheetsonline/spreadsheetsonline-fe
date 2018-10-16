import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://github.com/spreadsheetsonline">Github Repo</a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            A project by Cairo Miles and Logan
                    </div>
        </div>
      </footer>
    );
  }
}