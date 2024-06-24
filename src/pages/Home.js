// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to TextToTalent</h1>
      <div className="feature-links">
        <Link to="/resume-builder">Resume Builder</Link>
        <Link to="/ats">Calculate ATS Score</Link>
        <Link to="/cover-letter">Craft Cover Letter</Link>
        <Link to="/job-role">Predict Suitable Job Role</Link>
        <Link to="/resume-rewrite">Rewrite Resume</Link>
        <Link to="/action-words">Generate Action Words</Link>
        <Link to="/resume-tips">Resume Tips</Link>
        <Link to="/instagram">Connect to Instagram</Link>
      </div>
    </div>
  );
};

export default Home;
