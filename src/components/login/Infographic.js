import React, {Component} from "react";

class Infographic extends Component {
  render() {
    return (
      <div className="info-area info-horizontal mt-5">
        <div className="icon icon-warning">
          <i className="tim-icons icon-wifi" />
        </div>
        <div className="description">
          <h3 className="info-title">{this.props.title}</h3>
          <p className="description">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Infographic;
