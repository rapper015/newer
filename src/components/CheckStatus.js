import React, { useState } from 'react';
import './RegisterPage2.css';
const CheckStatusPage = () => {
  const [courseId, setCourseId] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('Status: Application Submitted for Course ID ' + courseId);
  };

  return (
    <div className="container"> <div className="imageContainer">
    <img src='/elements.svg'  alt="Your description" />
  </div>
  <div className="divider" />
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Check Status of your Submitted Application by course</h1>

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

          

          <div className="buttonContainer">
            <button type="submit" className="button primaryButton">
              Check Status
            </button>
          </div>

          
        </form>
        {statusMessage && <p>{statusMessage}</p>}
      </div>  
    </div>
  );
};

export default CheckStatusPage;
