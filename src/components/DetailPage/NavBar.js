import React from 'react';
import './../../css/detail.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav className="navbar hidden-in-small">
            <div className="menu-bar navbar-container">
                <div className="navbar-header">
                    <Link className="navbar-brand" href="/JavaScriptPrep">
                        <img src="https://javascript-prep.s3.ap-south-1.amazonaws.com/header.jpg" alt="Code" style={{ maxHeight: '50px' }} />
                    </Link>
                </div>

                <div className="navbar-collapse navbar-menu list-container" id="myNavbar">
                    <ul className="nav navbar-nav pull-right unordered-list">
                        <li><a href="/JavaScriptPrep/topic/:javascript">JavaScript</a></li>
                        <li><a href="/JavaScriptPrep/topic/:react-js">React JS</a></li>
                        <li><a href="/JavaScriptPrep/topic/:react-native">React Native</a></li>
                        <li><a href="/JavaScriptPrep/topic/:redux">Redux</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}