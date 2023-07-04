import React from "react";
import { Card } from "react-bootstrap";
import "./resume.css";
import jsPDF from "jspdf";

const Resume = ({ values, imageUrl }) => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${values.name}`, 10, 10);
    doc.text(`Email: ${values.email}`, 10, 20);
    doc.text(`Skills: ${values.skills}`, 10, 30);
    doc.text(`Description: ${values.description}`, 10, 40);
    doc.save(`${values.name}.pdf`);
  };

  return (
    <Card className="mt-3 bg-dark text-white">
      <div className="row">
        <div className="col-md-4">
          <img src={imageUrl} alt="profile" className="resume-img" />
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{values.name}</h3>
          <p>Email: {values.email}</p>
          <p>Skills: {values.skills}</p>
          <p>Description: {values.description}</p>
          <button className="btn btn-primary" onClick={handleDownloadPdf}>
            Download PDF
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Resume;