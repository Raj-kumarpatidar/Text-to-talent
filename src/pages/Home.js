import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to TextToTalent</h1>
      <div className="feature-cards">
        <Link to="/resume-builder" className="card">
          <h2>Resume Builder</h2>
          <p>Build a professional resume easily</p>
        </Link>
        <Link to="/ats" className="card">
          <h2>Calculate ATS Score</h2>
          <p>Get your resume ATS optimized</p>
        </Link>
        <Link to="/cover-letter" className="card">
          <h2>Craft Cover Letter</h2>
          <p>Write a perfect cover letter</p>
        </Link>
        <Link to="/job-role" className="card">
          <h2>Predict Suitable Job Role</h2>
          <p>Find the best job roles for you</p>
        </Link>
        <Link to="/resume-rewrite" className="card">
          <h2>Rewrite Resume</h2>
          <p>Improve your resume for better chances</p>
        </Link>
        <Link to="/action-words" className="card">
          <h2>Generate Action Words</h2>
          <p>Get powerful action words for your resume</p>
        </Link>
        <Link to="/resume-tips" className="card">
          <h2>Resume Tips</h2>
          <p>Learn tips to create a standout resume</p>
        </Link>
        <Link to="/instagram" className="card">
          <h2>Connect to Instagram</h2>
          <p>Follow us on Instagram for updates</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
