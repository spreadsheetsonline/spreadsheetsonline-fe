import React from "react";
import NavbarListItem from "./NavbarListItem";

class NavbarList extends React.Component {
  render() {
    return (
      <ul className="navbar-nav">
        <NavbarListItem itemText="Testing" itemUrl="https://google.com"/>
        <NavbarListItem itemText="Testing" itemUrl="https://google.com"/>
      </ul>
    );
  }
}

export default NavbarList;
