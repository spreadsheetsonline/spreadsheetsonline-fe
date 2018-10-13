import React, { Component } from 'react';


export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-mini">CT</a>

                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">Creative Tim</a>
                </div>

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active  ">
                            <a className="nav-link" href="#0">
                                <i className="tim-icons icon-chart-pie-36"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}