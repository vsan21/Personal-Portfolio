import React, { Component } from 'react';
import './About.css';
import Profile from '../images/Me.jpg';

export class About extends Component {
    render() {
        return (
            <div id='about'>
                <div id="header">
                    <h1>ABOUT</h1>
                </div>
                <div id="description-container">
                    <div id='pic'>
                        <p>Profile Pic</p>
                    </div>
                    <div id="border"></div>
                    <div id='description'>
                        <p>Vivian San</p>
                        <p>Highly analytical full-stack software engineer with educational background in the hard sciences. Strongly motivated by writing clean, efficient code, and passionate about teaching and giving back to underrepresented individuals and communities.</p>
                    </div>
                </div>
            </div>
        )
    }
}