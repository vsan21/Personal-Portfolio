import React, { Component } from 'react';
import './About.css';
// import Profile from '../images/me.jpg';

export class About extends Component {
    render() {
        return (
            <div id='about'>
                <div className='header'>
                    <h1>ABOUT</h1>
                </div>
                <div id="description-container">
                    <div id='pic'>
                        <img src={'/assets/images/me.jpg'} alt="Vivian"/>
                    </div>
                    <div id="border"></div>
                    <div id='description'>
                        <p>Vivian San</p>
                        <br />
                        <p>Highly analytical full-stack software engineer with educational background in the hard sciences. Strongly motivated by writing clean, efficient code, and passionate about teaching and giving back to underrepresented individuals and communities.</p>
                    </div>
                </div>
            </div>
        )
    }
}