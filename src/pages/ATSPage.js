import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import './ATSPage.css';

const ATSPage = () => {
  const [pdfText, setPdfText] = useState('');
  const [atsScore, setAtsScore] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

  const handlePDFUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        const typedArray = new Uint8Array(e.target.result);
        const pdfDoc = await PDFDocument.load(typedArray);
        const textContent = await extractTextFromPDF(pdfDoc);
        setPdfText(textContent);
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  const extractTextFromPDF = async (pdfDoc) => {
    const pages = pdfDoc.getPages();
    let textContent = '';
    for (let page of pages) {
      const { text } = await page.getTextContent();
      textContent += text.map(item => item.str).join(' ') + ' ';
    }
    return textContent;
  };

  const calculateATSScore = () => {
    if (!pdfText || !jobDescription) return;

    const resumeWords = pdfText.split(/\s+/).map(word => word.toLowerCase());
    const jobWords = jobDescription.split(/\s+/).map(word => word.toLowerCase());

    const matchedWords = jobWords.filter(word => resumeWords.includes(word));
    const score = (matchedWords.length / jobWords.length) * 100;
    setAtsScore(score);
  };

  return (
    <div className="ats-page-container">
      <h1>ATS Page</h1>
      <div className="form-group">
        <label>Upload Resume PDF:</label>
        <input type="file" accept="application/pdf" onChange={handlePDFUpload} />
      </div>
      <div className="form-group">
        <label>Job Description:</label>
        <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}></textarea>
      </div>
      <button onClick={calculateATSScore}>Calculate ATS Score</button>
      {atsScore !== null && (
        <div className="ats-score">
          <h2>ATS Score: {atsScore.toFixed(2)}%</h2>
        </div>
      )}
    </div>
  );
};

export default ATSPage;
