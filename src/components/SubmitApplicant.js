import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage2.css';
import Header from './Navbar';

const SubmitApplicant = () => {
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState('');
  const [skills, setSkills] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Form submitted successfully!');
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <><Header />
    <div className="container"> <div className="imageContainer">
    <img src='/elements.svg'  alt="Your description" />
  </div>
  <div className="divider" />
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Log in to your account</h1>

          <div className="inputContainer">
            <label htmlFor="studentId" className="label">Student ID</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
              className="input"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="courseId" className="label">Course ID</label>
            <input
              type="text"
              id="courseId"
              name="courseId"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              required
              className="input"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="skills" className="label">Skills</label>
            <textarea
              id="skills"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="input"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="additionalInformation" className="label">Additional Information</label>
            <textarea
              id="additionalInformation"
              name="additionalInformation"
              value={additionalInformation}
              onChange={(e) => setAdditionalInformation(e.target.value)}
              className="input"
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="file" className="label">File Upload</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              required
              className="input"
            />
          </div>

          <div className="buttonContainer">
            <button type="submit" className="button primaryButton">
              Register
            </button>
          </div>

          {successMessage && <p>{successMessage}</p>}
        </form>
      </div>  
    </div>
    </>
  );
};

export default SubmitApplicant;
