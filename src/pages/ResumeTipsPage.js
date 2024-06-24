// import React from 'react';
// import './ResumeTipsPage.css'; // If you have specific styles for ResumeBuilder

// const ResumeTipsPage = () => {
//   return (
//     <div className="resume-tips-container">
//       <h1>Some Resume Tips </h1>
//       {/* Add your resume builder components and logic here */}
//       <div className="tips-section">
//         <h2>1. Tailor Your Resume to the Job</h2>
//         <p>Customize your resume for each job application. Highlight the skills and experiences most relevant to the job description.</p>
//       </div>
//       <div className="tips-section">
//         <h2>2. Use a Clean and Professional Format</h2>
//         <p>Choose a simple, professional format. Avoid using fancy fonts or excessive graphics. Ensure that the resume is easy to read.</p>
//       </div>
//       <div className="tips-section">
//         <h2>3. Focus on Achievements</h2>
//         <p>Instead of listing duties, focus on what you achieved in each role. Use quantifiable metrics to showcase your impact.</p>
//       </div>
//       <div className="tips-section">
//         <h2>4. Use Action Words</h2>
//         <p>Start each bullet point with strong action verbs. Words like "Developed," "Led," and "Implemented" can make your resume more dynamic.</p>
//       </div>
//       <div className="tips-section">
//         <h2>5. Keep it Concise</h2>
//         <p>Keep your resume concise and to the point. Aim for one page if possible, but don't exceed two pages.</p>
//       </div>
      
//     </div>
//   );
// };

// export default ResumeTipsPage;



import React from 'react';
import './ResumeTipsPage.css'; // Import the CSS file for styling
import 'animate.css';

const tips = [
  {
    title: "Tailor Your Resume to the Job",
    description: "Customize your resume for each job application. Highlight the skills and experiences most relevant to the job description.",
    image: "image-url-1.jpg"
  },
  {
    title: "Use a Clean and Professional Format",
    description: "Choose a simple, professional format. Avoid using fancy fonts or excessive graphics. Ensure that the resume is easy to read.",
    image: "image-url-2.jpg"
  },
  {
    title: "Focus on Achievements",
    description: "Instead of listing duties, focus on what you achieved in each role. Use quantifiable metrics to showcase your impact.",
    image: "image-url-3.jpg"
  },
  {
    title: "Use Action Words",
    description: "Start each bullet point with strong action verbs. Words like 'Developed,' 'Led,' and 'Implemented' can make your resume more dynamic.",
    image: "image-url-4.jpg"
  },
  {
    title: "Keep it Concise",
    description: "Keep your resume concise and to the point. Aim for one page if possible, but don't exceed two pages.",
    image: "image-url-5.jpg"
  }
];

const ResumeTipsPage = () => {
  return (
    <div className="resume-tips-container">
      <h1>Resume Tips</h1>
      <div className="cards-container">
        {tips.map((tip, index) => (
          <div key={index} className="card animate__animated animate__fadeInUp">
            <img src={tip.image} alt={tip.title} className="card-image" />
            <div className="card-content">
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTipsPage;
