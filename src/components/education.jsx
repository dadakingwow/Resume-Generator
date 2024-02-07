import { useCallback, useState } from "react";
import "./education.css";

function education({
  schoolName,
  major,
  fromDate,
  endDate,
  newSchoolName,
  newMajor,
  newFromDate,
  newEndDate,
  handleAddEducation,
}) {
  return (
    <div className="education">
      <label>
        School :
        <input value={schoolName} onChange={newSchoolName} />
      </label>
      <label>
        Major :
        <input value={major} onChange={newMajor} />
      </label>
      <label>
        From :
        <input value={fromDate} onChange={newFromDate} />
      </label>
      <label>
        To :
        <input value={endDate} onChange={newEndDate} />
      </label>
      <button
        id="educationBtn"
        onClick={() => {
          handleAddEducation();
        }}
      >
        Add Education
      </button>
    </div>
  );
}

export default education;
