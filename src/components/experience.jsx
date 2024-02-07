import "./experience.css";

function Experience({
  companyName,
  newCompanyName,
  jobTitle,
  newJobTitle,
  jobDuty,
  newJobDuty,
  jobFromDate,
  newJobFromDate,
  jobEndDate,
  newJobEndDate,
  addExperience,
}) {
  return (
    <>
      <div className="experience">
        <label>
          Company Name :
          <input type="text" value={companyName} onChange={newCompanyName} />
        </label>
        <label>
          Job Title :
          <input type="text " value={jobTitle} onChange={newJobTitle} />
        </label>
        <label>
          Job Duty :
          <input type="text" value={jobDuty} onChange={newJobDuty} />
        </label>
        <label>
          From :
          <input type="text" value={jobFromDate} onChange={newJobFromDate} />
        </label>
        <label>
          To :
          <input type="text" value={jobEndDate} onChange={newJobEndDate} />
        </label>
        <button id="experienceBtn" onClick={() => addExperience()}>
          Add Experience
        </button>
      </div>
    </>
  );
}

export default Experience;
