import React, { Component } from 'react';
import './Projects.css';
import Calculator from '../images/Calculator.jpg';


export class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <div className='header'>
                    <h1>PROJECTS</h1>
                </div>
                <div id="portfolio">
                    <a href='https://github.com/vsan21/React-Calculator'><img src={Calculator}alt='Calculator' class='img-fluid' /></a>
                    <img src={Calculator} alt='Calculator' class='img-fluid' />
                    <img src={Calculator} alt='Calculator' class='img-fluid' />
                    <img src={Calculator} alt='Calculator' class='img-fluid' />
                    <img src={Calculator} alt='Calculator' class='img-fluid' />
                    <img src={Calculator} alt='Calculator' class='img-fluid' />
                </div>
                </div>
                )
            }
}