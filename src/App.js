
import './App.css';
import React from 'react';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Projects from './components/projects';
import Header from './components/Header';
import Tools from './components/tools';
import Login from './components/login'
import Admin from './components/admin';
import GitHubPreview from './components/GitHubPreview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
    const token = localStorage.getItem('authorization');
    const roles = JSON.parse(localStorage.getItem('roles'));
    return { token, roles };
};
const ProtectedRoute = ({ children, allowedRoles }) => {
    const { token, roles } = useAuth();
    const isAuthorized = roles?.some(role => allowedRoles.includes(role));
    return token && isAuthorized ? children : <Navigate to="/login" />;
};


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
                    <Route path="/admin" element={
                        <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
                            <Admin />
                        </ProtectedRoute>
                    } />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/github" element={<GitHubPreview />} />
                    <Route path="/Tools" element={<Tools />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;