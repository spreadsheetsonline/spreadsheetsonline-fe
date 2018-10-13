import React from "react";

class NavbarListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <li className="nav-item">
        <a href={this.props.itemUrl} className="nav-link">
          {this.props.itemText}
        </a>
      </li>
    );
  }
}

export default NavbarListItem;
