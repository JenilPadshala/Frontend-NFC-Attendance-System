import { useLocation } from "react-router-dom";
import FacultyNavbar from "../components/FacultyNavbar";
import { useState } from "react";
export default function TakeAttendance() {
  const [nfcId, setNfcId] = useState("");

  const location = useLocation();
  const { course, facultyData } = location.state;

  function handleClick(e) {
    e.preventDefault();
    console.log(nfcId);
  }

  return (
    <div>
      <FacultyNavbar facultyData={facultyData} />
      <div className="container text-center mt-5">
        <form>
          <div className="mb-3">
            <h1>Enter Attendance</h1>
            <input
              type="text"
              className="form-control"
              id="nfc_id"
              placeholder="NFC ID"
              value={nfcId}
              onChange={(e) => setNfcId(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
