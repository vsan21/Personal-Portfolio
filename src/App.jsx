import React, { Component } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
          <div id='about'>
            <About />
          </div>
          <div id='technologies'>
            <Technologies />
          </div>
          <div id='projects'>
            <Projects />
          </div>
          <div id='blog'>
            <Blog />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
