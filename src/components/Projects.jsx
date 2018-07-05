import React, { Component } from 'react';
import './Projects.css';

export class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <div className='header'>
                    <h1>PROJECTS</h1>
                </div>

                <div id="portfolio">
                    <div className="view overlay">
                        <img src={process.env.PUBLIC_URL + '/assets/images/mapjourney.jpg'} className="img-fluid" alt="Map Journey" />
                        <a href='https://github.com/vsan21/MapJourney' target="_blank" rel="noopener noreferrer">
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">MapJourney</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={process.env.PUBLIC_URL + '/assets/images/eventonica.jpg'} className="img-fluid" alt="Eventonica" />
                        <a href='https://github.com/vsan21/Eventonica' target="_blank" rel="noopener noreferrer">
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">Eventonica</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={process.env.PUBLIC_URL + '/assets/images/calculator.jpg'} className="img-fluid" alt="Calculator" />
                        <a href='https://github.com/vsan21/React-Calculator' target="_blank" rel="noopener noreferrer">
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">React Calculator</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={process.env.PUBLIC_URL + '/assets/images/githubguide.jpg'} className="img-fluid" alt="Github Dynamic Workflow Guide" />
                        <a href='https://github.com/vsan21/Git-Github-Tutorial' target="_blank" rel="noopener noreferrer">
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">Github Dynamic Workflow Guide</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={process.env.PUBLIC_URL + '/assets/images/guessnum.jpg'} className="img-fluid" alt="Guess My Number" />
                        <a href='https://github.com/vsan21/Guess_My_Number' target="_blank" rel="noopener noreferrer">
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">Guess My Number</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={process.env.PUBLIC_URL + '/assets/images/more.jpg'} className="img-fluid" alt="More To Come" />
                    </div>
                </div>
                
            </div>
        )
    }
}