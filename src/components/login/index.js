import React from 'react';
import Infographic from './Infographic'
import cardPrimary from '../../assets/img/card-primary.png'
import { connect } from 'react-redux';
import Auth0 from '../auth'

const LoginPage = ({ dispatch }) => {
    let input;
    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-5 ml-auto">
                    <Infographic title={'Marketing'} description={`We've created the marketing campaign of the website. It was a very interesting collaboration.`} />
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
                           <button onClick={Auth0.signIn} className="btn btn-primary btn-round btn-lg">Get Started</button>
                           <button onClick={Auth0.signOut} className="btn btn-primary btn-round btn-lg">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

function ShowUser(user) {
    return user;
}

const mapStateToProps = state => (ShowUser(state))

export default connect(mapStateToProps, null)(LoginPage)