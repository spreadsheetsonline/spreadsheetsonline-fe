import React, {Component} from "react";

class LoginPasswordInput extends Component {
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            {/* <i className="tim-icons icon-lock-circle"></i> */}
            {/* <h3 className="">{this.props.label}</h3> */}
          </div>
        </div>
        <input type="text" className="form-control" placeholder="Keep it safe, away from golumn" />
      </div>
    );
  }
}

export default LoginPasswordInput;
