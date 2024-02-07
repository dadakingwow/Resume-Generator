import "./Result.css";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Result = ({
  fullName,
  email,
  phoneNumber,
  savedEducationData,
  savedExperienceData,
}) => {
  return (
    <>
      <div className="information">
        <p id="fullName">
          <CgProfile />
          {fullName}
        </p>
        <div className="bottomSide">
          <p>
            <MdEmail />
            {email}
          </p>
          <p>
            <FaPhoneAlt />
            {phoneNumber}
          </p>
        </div>
      </div>
      <div className="educationPart">
        <h2 id="educatio sn">Education</h2>
        {savedEducationData.map((education, index) => (
          <div key={index} className="educationInfo">
            <p className="schoolName"> {education.schoolName}</p>
            <div className="major">
              <p>{education.major}</p>
              <p>
                {education.fromDate}-{education.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="experiencePart">
        <h2>Exeprience</h2>
        {savedExperienceData.map((experience, index) => (
          <div key={index} className="experienceInfo">
            <div className="experienceLeft">
              <p className="companyName">{experience.companyName}</p>
              <p className="jobDuty">{experience.jobDuty}</p>
            </div>
            <div className="experienceRight">
              <p className="jobTitle">{experience.jobTitle}</p>
              <p className="dates">
                {experience.jobFromDate}-{experience.jobEndDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Result;
