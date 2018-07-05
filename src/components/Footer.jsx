import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer id='footer-container'>
                <div id="footer-links">
                    <a href="https://github.com/vsan21" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-3x fa-fw"></i></a>
                    <a href="https://www.linkedin.com/in/viviansan/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin fa-3x fa-fw"></i></a>
                    <a href="https://twitter.com/VivianSan21" rel="noopener noreferrer" target="_blank"><i class="fab fa-twitter fa-3x fa-fw"></i></a>
                    <a href="" rel="noopener noreferrer" target="_blank"><i class="fas fa-file-invoice fa-3x fa-fw"></i></a>
                </div>
                <br />
                <p>Made with <i class="fas fa-heart"></i> by Vivian San</p>
            </footer>
        );
    }
}