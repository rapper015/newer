import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const YourDataPage = ({ applicantData }) => {
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet([applicantData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "ApplicantData");
    XLSX.writeFile(wb, "applicant_data.xlsx");
  };

  return (
    <div className="container">
      <h1>TA Applicant Details</h1>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              {Object.keys(applicantData).map((key) => (
                <th className="header" key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(applicantData).map((value, index) => (
                <td className="cell" key={index}>{value}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttonContainer">
        <button className="button" onClick={exportToCSV}>Export to Excel</button>
      </div>
    </div>
  );
};

export default YourDataPage;

const applicantData = {
    studentId: '123',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    contactNumber: '1234567890',
    address: '123 Main St',
    cgpa: '3.5',
    additionalInformation: 'Some additional information',
  };
  
  <YourDataPage applicantData={applicantData} />