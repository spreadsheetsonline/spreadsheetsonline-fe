import React from "react";
import NavbarList from "./NavbarList";
import NavSearchBar from "./NavSearchBar";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="/presentation.html">
              Anaxi Prime
            </a>
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

export default Navbar;
