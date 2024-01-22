
import './App.css';
import React from 'react';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Projects from './components/projects';
import Header from './components/Header';
import Tools from './components/tools';
import GitHubPreview from './components/GitHubPreview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <AboutMe />
                            <Projects />
                            <Contact />
                            <GitHubPreview />
                        </>
                    } />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/github" element={<GitHubPreview />} />
                    <Route path="/Tools" element={<Tools />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;