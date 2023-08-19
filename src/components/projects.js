import React from 'react';
import '../App.css'; 

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2>Projects</h2>
                <div className="project">
                    <h3>Simpson Services System</h3>
                    <p>
                       A fully functioning business program built entirely through python
                    </p>
                </div>
                <div className="project">
                    <h3>Task Manager</h3>
                    <p>
                        For managing tasks, built with React.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;