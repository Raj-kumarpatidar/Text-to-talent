import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the change in imports
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import ATSPage from './pages/ATSPage';
import CoverLetterPage from './pages/CoverLetterPage';
import JobRolePage from './pages/JobRolePredictionPage';
import ResumeRewritePage from './pages/ResumeRewritePage';
import ActionWordsPage from './pages/ActionWordsPage';
import ResumeTipsPage from './pages/ResumeTipsPage';
import InstagramPage from './pages/InstagramPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/ats" element={<ATSPage />} />
        <Route path="/cover-letter" element={<CoverLetterPage />} />
        <Route path="/job-role" element={<JobRolePage />} />
        <Route path="/resume-rewrite" element={<ResumeRewritePage />} />
        <Route path="/action-words" element={<ActionWordsPage />} />
        <Route path="/resume-tips" element={<ResumeTipsPage />} />
        <Route path="/instagram" element={<InstagramPage />} />
      </Routes>
    </Router>
  );
};

export default App;
