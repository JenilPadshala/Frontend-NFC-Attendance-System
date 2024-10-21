import React from "react";
import { useLocation } from "react-router-dom";
export default function StudentAttendance() {
  const location = useLocation();
  const { studentData } = location.state || {};

  return (
    <div className="container mt-5">
      <h1>Student Details</h1>
      {studentData ? (
        <div>
          <p>
            <strong>Name:</strong> {studentData.first_name}{" "}
            {studentData.last_name}
          </p>
          <p>
            <strong>Student Id:</strong> {studentData.student_id}
          </p>
          <p>
            <strong>Email:</strong> {studentData.email}
          </p>
          <p>
            <strong>NFC ID:</strong> {studentData.nfc_tag_id}
          </p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
