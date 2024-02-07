import { useState } from "react";
import Header from "./components/header";
import Result from "./components/Result";
import Education from "./components/education";
import Experience from "./components/experience";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDuty, setJobDuty] = useState("");
  const [jobFromDate, setJobFromDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [savedEducationData, setSavedEducationData] = useState([]);
  const [savedExperienceData, setSavedExperienceData] = useState([]);

  const downloadPdf = () => {
    const input = document.getElementById("resultContent");

    html2canvas(input, { scale: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  const handleAddExperience = () => {
    if (companyName && jobTitle && jobDuty && jobFromDate && jobEndDate) {
      setSavedExperienceData([
        ...savedExperienceData,
        { companyName, jobTitle, jobDuty, jobFromDate, jobEndDate },
      ]);

      setCompanyName("");
      setJobTitle("");
      setJobDuty("");
      setJobFromDate("");
      setJobEndDate("");
    }
  };

  const handleAddEducation = () => {
    if (schoolName && major && fromDate && endDate) {
      setSavedEducationData([
        ...savedEducationData,
        { schoolName, major, fromDate, endDate },
      ]);
      setSchoolName("");
      setMajor("");
      setFromDate("");
      setEndDate("");
    }
  };

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handleJobTitleChange(e) {
    setJobTitle(e.target.value);
  }

  function handleJobDutyChange(e) {
    setJobDuty(e.target.value);
  }

  function handleJobFromDateChange(e) {
    setJobFromDate(e.target.value);
  }

  function handleJobEndDateChange(e) {
    setJobEndDate(e.target.value);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }
  function handleMajorChange(e) {
    setMajor(e.target.value);
  }
  function handleFromDateChange(e) {
    setFromDate(e.target.value);
  }
  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }
  return (
    <div className="form">
      <div className="leftSide">
        <Header
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          newFirstName={handleFirstNameChange}
          newLastName={handleLastNameChange}
          newEmail={handleEmailChange}
          newPhoneNumber={handlePhoneNumberChange}
        />
        <Education
          schoolName={schoolName}
          major={major}
          fromDate={fromDate}
          endDate={endDate}
          newSchoolName={handleSchoolNameChange}
          newMajor={handleMajorChange}
          newFromDate={handleFromDateChange}
          newEndDate={handleEndDateChange}
          handleAddEducation={handleAddEducation}
        />
        <Experience
          companyName={companyName}
          jobTitle={jobTitle}
          jobDuty={jobDuty}
          jobFromDate={jobFromDate}
          jobEndDate={jobEndDate}
          newCompanyName={handleCompanyNameChange}
          newJobTitle={handleJobTitleChange}
          newJobDuty={handleJobDutyChange}
          newJobFromDate={handleJobFromDateChange}
          newJobEndDate={handleJobEndDateChange}
          addExperience={handleAddExperience}
        />
      </div>
      <div className="rightSide" id="resultContent">
        <Result
          fullName={`${firstName} ${lastName}`}
          email={email}
          phoneNumber={phoneNumber}
          schoolName={schoolName}
          major={major}
          fromDate={fromDate}
          endDate={endDate}
          companyName={companyName}
          jobTitle={jobTitle}
          jobDuty={jobDuty}
          jobFromDate={jobFromDate}
          jobEndDate={jobEndDate}
          savedEducationData={savedEducationData}
          savedExperienceData={savedExperienceData}
        />
      </div>
      <div className="downloadBtnContainer">
        <button onClick={downloadPdf}>Download as PDF</button>
      </div>
    </div>
  );
}

export default App;
