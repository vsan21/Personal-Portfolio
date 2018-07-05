import React, { Component } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="intro">
				</div>
				<div className='content-container'>
					<About />
					<Technologies />
					<Projects />
					<Blog />
					{/* <Footer /> */}
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
