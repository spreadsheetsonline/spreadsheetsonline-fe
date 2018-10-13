import React, {Component} from "react";

class LoginEmailInput extends Component {
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="tim-icons icon-email-85"></i>
          </div>
        </div>
        <input type="text" placeholder="Email" className="form-control" />
      </div>
    );
  }
}

export default LoginEmailInput;
