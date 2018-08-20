import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './Blog.css';

export class Blog extends Component {
    render() {
        return (
            <div id="blog">
                <div className='header'>
                    <h1>STORIES</h1>
                </div>

                <div id="blog-container">

                    <div className="story">
                        <img src="/assets/images/professional_me.jpg" alt="Vivian" id="techtonica-pic"/>
                        <div className="story-container">
                            <h2>My Apprentice Story</h2>
                            <p>Read more about how I got started learning how to code as an apprentice at Techtonica Org.</p>
                            <Button bsStyle="primary" bsSize="large" href="https://medium.com/techtonica/apprentice-story-vivian-3525066244cb" target="_blank" rel="noopener noreferrer">Link</Button>
                        </div>
                    </div>

                    <div className="story">
                        <img src="/assets/images/podcast.jpg" alt="group talking during podcast" id="podcast-pic"/>
                        <div className="story-container">
                            <h2>Guest on GCP Podcast</h2>
                            <p>I had the fantastic opportunity of speaking about my experience at Techtonica during the Google Cloud Next '18 Conference! </p>
                            <Button bsStyle="primary" bsSize="large" href="https://www.gcppodcast.com/post/episode-139-next-day-3/" target="_blank" rel="noopener noreferrer">Link</Button>
                        </div>
                    </div>
                    
                </div>
            </div>   
        )
    }
}