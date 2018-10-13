import React, { Component } from 'react';

export default class LoginNameInput extends Component {
    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>
                <input type="text" className="form-control" placeholder={this.props.plchldr} />
            </div>
        );
    }
}