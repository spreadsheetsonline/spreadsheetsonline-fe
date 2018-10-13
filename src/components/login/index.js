import React, { Component } from 'react';
import LoginEmailInput from './LoginEmailInput'
import LoginNameInput from './LoginNameInput';
import LoginPasswordInput from './LoginPasswordInput'
import Infographic from './Infographic'
import cardPrimary from '../../assets/img/card-primary.png'

export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
          user: {
            firstName: '',
            lastName: '',
            email: ''
          }
        }
      }
    
      fnInputChangeHandler(e) {
        return this.setState({user: {firstName: e.target.value}})
      }
    
      lnInputChangeHandler(e) {
        return this.setState({user: {lastName: e.target.value}})
      }
    
      submitHandler(e) {
        e.preventDefault();
    
        let fn = this.state.firstName.trim();
        let ln = this.state.lastName.trim();
        let email = this.state.email.trim();
    
        if(!ln || !fn || !email) {
          return;
        }
        
      }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 ml-auto">
                        <Infographic title={'Marketing'} description={`We've created the marketing campaign of the website. It was a very interesting collaboration.`}/>
                        <Infographic title={`We dont store your data!`} description={`We dont want to get hacked, easiest way not to? Don't Store Anything Valuable. NO API KEYS NO USERNAMES nothing. Think of us as a middle man between you and getting rich`} />
                        <Infographic title={`Built Audience`} description={`There is also a Fully Customizable CMS Admin Dashboard for this product.`} />
                    </div>
                    <div className="col-md-7 mr-auto">
                        <div className="card card-register card-white">
                            <div className="card-header">
                                <img className="card info" src={cardPrimary} alt="Info Card" />
                                <h4 className="card-title">Register</h4>
                            </div>
                            <div className="card-body">
                                <form className="form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <LoginNameInput  plchldr={'first name'} />
                                        </div>
                                        <div className="col-md-6">
                                            <LoginNameInput plchldr={'last name'} />
                                        </div>
                                    </div>
                                    <LoginEmailInput />
                                    <LoginPasswordInput />
                                    <div className="form-check text-left">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" />
                                            <span className="form-check-sign"></span>
                                            I agree to the <a href="github.com/spreadsheetsonline">terms and conditions</a>.
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <a href="github.com/spreadsheetsonline" className="btn btn-primary btn-round btn-lg">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}