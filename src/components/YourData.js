import React, { useState } from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import './YourData.css';
import Header from './Navbar';

const YourDataPage = () => {
  const [instructorData, setInstructorData] = useState([
    {
      instructorID: '001',
      instructorName: 'John Doe',
      courseID: 'CSE101',
      courseName: 'Computer Science 101',
    },
    // Add more instructors as needed
  ]);

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(instructorData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "InstructorData");
    XLSX.writeFile(wb, "instructor_data.xlsx");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="tableContainer">
          <h1>Instructor Details</h1>
          <table className="table">
            <thead>
              <tr>
                {Object.keys(instructorData[0]).map((key) => (
                  <th className="header" key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {instructorData.map((instructor, index) => (
                <tr key={index}>
                  <td className="cell">{instructor.instructorID}</td>
                  <td className="cell">{instructor.instructorName}</td>
                  <td className="cell">{instructor.courseID}</td>
                  <td className="cell">{instructor.courseName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="buttonContainer">
            <button className="button2" onClick={exportToCSV}>Export to Excel</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default YourDataPage;
