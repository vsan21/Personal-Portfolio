import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer id='footer-container'>
                <div id="footer-links">
                    <a href="https://github.com/vsan21" rel="noopener noreferrer" target="_blank"><i className="fab fa-github fa-3x fa-fw"></i></a>
                    <a href="https://www.linkedin.com/in/viviansan/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-3x fa-fw"></i></a>
                    <a href="https://twitter.com/VivianSan21" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter fa-3x fa-fw"></i></a>
                    <a href="https://drive.google.com/file/d/108VCn4J6sKof2nd4cVfVb32DyA7I5k6v/view?usp=sharing" rel="noopener noreferrer" target="_blank"><i className="fas fa-file-invoice fa-3x fa-fw"></i></a>
                </div>
                <br />
                <p>Made with  by Vivian San</p>
            </footer>
        );
    }
}