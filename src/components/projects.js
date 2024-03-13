import React from 'react';
import '../App.css'; 

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2>Notable Projects</h2>
                <a href='https://github.com/BLewis-Keyin/Flight-Data-Portal'>
                    <div className="project" >
                    <h3>Flight Data Portal</h3>
                    <p>
                        The Flight Data Portal is a web application designed to manage and display flight information. It features user authentication, API endpoints for flight data, and a modular routing system
                    </p>
                    </div></a>
                <a href='https://github.com/BLewis-Keyin/RedditVideoScraper'><div className="project" >
                    <h3>Reddit Video Scraper</h3>
                    <p>
                        A python flask application that uses ffmpeg and the reddit API to serve mp4 video from a given reddit post URL
                    </p>
                </div></a>
            </div>
        </section>
    );
}

export default Projects;