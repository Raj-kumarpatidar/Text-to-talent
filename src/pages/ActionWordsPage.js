
import React from 'react';
import './ActionWordsPage.css'; 
import 'animate.css';

const actionWords = [
  "Achieved", "Adapted", "Administered", "Advocated", "Analyzed", "Assembled", "Assessed", "Budgeted", "Built", 
  "Collaborated", "Conducted", "Consulted", "Created", "Designed", "Developed", "Directed", "Enhanced", "Established", 
  "Executed", "Facilitated", "Generated", "Implemented", "Improved", "Increased", "Influenced", "Initiated", "Led", 
  "Managed", "Negotiated", "Operated", "Organized", "Oversaw", "Planned", "Produced", "Promoted", "Resolved", 
  "Reviewed", "Scheduled", "Spearheaded", "Supervised", "Trained", "Transformed", "Utilized"
];

const ActionWordsPage = () => {
  return (
    <div className="action-words-container">
      <h1>Action Words for Your Resume</h1>
      <div className="words-grid">
        {actionWords.map((word, index) => (
          <div key={index} className="word-card animate__animated animate__zoomIn">
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionWordsPage;
