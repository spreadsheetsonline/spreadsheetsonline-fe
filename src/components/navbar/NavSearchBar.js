import React from "react";

class NavSearchBar extends React.Component {
  render() {
    return (
      <form className="form-inline ml-auto">
        <div className="form-group no-border">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className="btn btn-link btn-icon btn-round">
          <i className="tim-icons icon-zoom-split" />
        </button>
      </form>
    );
  }
}

export default NavSearchBar;
