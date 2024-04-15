import React, { useState } from 'react';
import './RegisterPage2.css';

const RegisterPage2 = () => {
  const [courseID, setCourseID] = useState('');
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [instructorID, setInstructorID] = useState('');
  const [numberOfTAsNeeded, setNumberOfTAsNeeded] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');

  return (
    <div className="container">
      <div className="imageContainer">
        <img src='/empty-search.svg'  alt="Your description" />
      </div>
      <div className="divider" />
      <div className="formContainer">
        <form>
          <h1 className="title">Course Registration</h1>
          <div className="inputContainer">
            <label htmlFor="courseID" className="label">Course ID</label>
            <input
              type="text"
              id="courseID"
              name="courseID"
              value={courseID}
              onChange={(e) => setCourseID(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="courseName" className="label">Course Name</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="description" className="label">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="instructorID" className="label">Instructor ID</label>
            <input
              type="text"
              id="instructorID"
              name="instructorID"
              value={instructorID}
              onChange={(e) => setInstructorID(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="numberOfTAsNeeded" className="label">Number of TAs Needed</label>
            <input
              type="number"
              id="numberOfTAsNeeded"
              name="numberOfTAsNeeded"
              value={numberOfTAsNeeded}
              onChange={(e) => setNumberOfTAsNeeded(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="skillsRequired" className="label">Skills Required</label>
            <input
              type="text"
              id="skillsRequired"
              name="skillsRequired"
              value={skillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" className="button primaryButton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage2;
