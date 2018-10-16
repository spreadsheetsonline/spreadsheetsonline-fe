import React from "react";
import NavbarList from "./NavbarList";
import NavSearchBar from "./NavSearchBar";
import {Link, withRouter} from 'react-router-dom';
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <div className="navbar-translate">
            <Link className="navbar-brand" to="/">
              Anaxi Prime
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <NavbarList />
            <NavSearchBar />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
