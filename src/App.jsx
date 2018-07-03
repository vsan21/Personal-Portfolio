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
          <About />
          <Technologies />
          <Projects />
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
