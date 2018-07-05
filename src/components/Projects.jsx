import React, { Component } from 'react';
import './Projects.css';
import MapJourney from '../images/mapjourney.jpg';
import Eventonica from '../images/eventonica.jpg';
// import Calculator from '../images/calculator.jpg';
import GithubGuide from '../images/githubguide.jpg';
import GuessNum from '../images/guessnum.jpg';
import More from '../images/more.jpg';

export class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <div className='header'>
                    <h1>PROJECTS</h1>
                </div>

                <div id="portfolio">
                    <div className="view overlay">
                        <img src={MapJourney} className="img-fluid" alt="Map Journey" />
                        <a href='https://github.com/vsan21/MapJourney'>
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">MapJourney</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={Eventonica} className="img-fluid" alt="Eventonica" />
                        <a href='https://github.com/vsan21/Eventonica'>
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">Eventonica</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={Eventonica} className="img-fluid" alt="Calculator" />
                        <a href='https://github.com/vsan21/React-Calculator'>
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">React Calculator</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={GithubGuide} className="img-fluid" alt="Github Dynamic Workflow Guide" />
                        <a href='https://github.com/vsan21/Git-Github-Tutorial'>
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">Github Dynamic Workflow Guide</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={GuessNum} className="img-fluid" alt="Guess My Number" />
                        <a href='https://github.com/vsan21/Guess_My_Number'>
                            <div className="mask flex-center rgba-green-strong">
                                <p className="text">Guess My Number</p>
                            </div>
                        </a>
                    </div>
                    <div className="view overlay">
                        <img src={More} className="img-fluid" alt="More To Come" />
                    </div>
                </div>
                
            </div>
        )
    }
}