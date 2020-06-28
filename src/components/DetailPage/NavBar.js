import React from 'react';
import './../../css/detail.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav class="navbar navbar-section navbar-fixed-top hidden-in-small">
            <div class="menu-bar" style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <div class="navbar-header">
                    {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button> */}
                    <Link class="navbar-brand" href="/">
                        <img src="https://javascript-prep.s3.ap-south-1.amazonaws.com/JavaScript-logo.png" alt="Orgzit" style={{ maxHeight: '40px' }} />
                    </Link>
                </div>

                <div class="navbar-collapse navbar-menu" id="myNavbar" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <ul class="nav navbar-nav pull-right unordered-list" style={{ display: 'flex', flexDirection: 'row' }}>
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