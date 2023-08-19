import './App.css';
import React from 'react';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Projects from './components/projects';
import Header from './components/Header';
import GitHubPreview from './components/GitHubPreview'

function App() {
    return (
        <div className="App">
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
        <GitHubPreview />    
        </div>
    );
}

export default App;