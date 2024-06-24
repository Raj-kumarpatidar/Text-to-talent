import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import showdown from 'showdown';
import 'animate.css';
import './ResumeBuilderPage.css';

const ResumeBuilderPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = async () => {
    const { name, email, phone, address, summary, experience, education, skills } = formData;

    const MyDocument = () => (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed>Resume</Text>
          <View style={styles.section}>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Address: {address}</Text>
          </View>
          <View style={styles.section}>
            <Text>Summary: {summary}</Text>
            <Text>Experience: {experience}</Text>
            <Text>Education: {education}</Text>
            <Text>Skills: {skills}</Text>
          </View>
        </Page>
      </Document>
    );

    const pdfBlob = await pdf(<MyDocument />).toBlob();
    saveAs(pdfBlob, 'resume.pdf');
  };

  const generateLaTeX = () => {
    const { name, email, phone, address, summary, experience, education, skills } = formData;
    const converter = new showdown.Converter();
    const markdown = `
      ## Resume

      ### Personal Information
      - **Name:** ${name}
      - **Email:** ${email}
      - **Phone:** ${phone}
      - **Address:** ${address}

      ### Summary
      ${summary}

      ### Experience
      ${experience}

      ### Education
      ${education}

      ### Skills
      ${skills}
    `;
    const latex = converter.makeHtml(markdown);
    const blob = new Blob([latex], { type: 'application/x-latex' });
    saveAs(blob, 'resume.tex');
  };

  return (
    <div className="resume-builder-container animate__animated animate__fadeIn">
      <h1 className="animate__animated animate__bounceIn">Resume Builder</h1>
      <div className="form-group animate__animated animate__fadeInLeft">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group animate__animated animate__fadeInRight">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group animate__animated animate__fadeInLeft">
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div className="form-group animate__animated animate__fadeInRight">
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div className="form-group animate__animated animate__fadeInLeft">
        <label>Summary:</label>
        <textarea name="summary" value={formData.summary} onChange={handleChange}></textarea>
      </div>
      <div className="form-group animate__animated animate__fadeInRight">
        <label>Experience:</label>
        <textarea name="experience" value={formData.experience} onChange={handleChange}></textarea>
      </div>
      <div className="form-group animate__animated animate__fadeInLeft">
        <label>Education:</label>
        <textarea name="education" value={formData.education} onChange={handleChange}></textarea>
      </div>
      <div className="form-group animate__animated animate__fadeInRight">
        <label>Skills:</label>
        <textarea name="skills" value={formData.skills} onChange={handleChange}></textarea>
      </div>
      <div className="button-container">
        <button onClick={generatePDF} className="animate__animated animate__fadeInUp">Generate PDF</button>
        <button onClick={generateLaTeX} className="animate__animated animate__fadeInUp">Generate LaTeX</button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
});

export default ResumeBuilderPage;
