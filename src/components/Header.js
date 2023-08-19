import React from 'react';
import '../App.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Brandon Lewis</h1>
        <p className="header-subtitle">Developer</p>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;