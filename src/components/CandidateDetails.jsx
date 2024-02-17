// src/components/CandidateDetails.js
import React from "react";
import icon_nothing from "/nothing.png";
import icon_noPfp from "/noPfp.png";
import "../css/components/candidateDetails.css";
import Button1 from "./UiCom/Button1";
import Button2 from "./UiCom/Button2";
import OutputBox from "./UiCom/OutputBox";
import { deleteCandidate } from "../services/api";
import { useNavigate } from "react-router-dom";

const CandidateDetails = ({ candidate }) => {
  const handleDelete = async () => {
    try {
      await deleteCandidate(candidate.id);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete candidate:", error.message);
    }
  };
  return (
    <div className="CandidateDetails-mainDiv">
      {candidate ? (
        <>
          <div className="CandidateDetails-subDiv">
            <div className="CandidateDetails-leftDiv">
              <div className="CandidateDetails-pfpDiv">
                <img src={icon_noPfp} />
                <p>ID: {candidate.id}</p>
              </div>
              <div className="CandidateDetails-btnsDiv">
                <Button1
                  goToLink={`/candidate/${candidate.id}`}
                  BtnTitle="Edit Profile"
                />
                <Button2 BtnTitle="Delete Profile" onClick={handleDelete} />
              </div>
            </div>
            <div className="CandidateDetails-RightDiv">
              <div className="CandidateDetails-infoDiv">
                {/* ----------------about---------------  */}
                <h1>About</h1>
                <OutputBox OutputTitle="Name" OutputText={candidate.name} />
                <OutputBox
                  OutputTitle="Address"
                  OutputText={candidate.address}
                />
                <OutputBox OutputTitle="Phone" OutputText={candidate.phone} />
                <OutputBox OutputTitle="Email" OutputText={candidate.email} />
                <OutputBox OutputTitle="Gender" OutputText={candidate.gender} />
                <OutputBox
                  OutputTitle="Hobbies"
                  OutputText={candidate.hobbies}
                />
              </div>
              <div className="CandidateDetails-infoDiv">
                {/* ----------------eduction---------------  */}
                {candidate.education.map((edu, index) => (
                  <>
                    <h1>Education</h1>
                    <OutputBox
                      key={index}
                      OutputTitle="Institute"
                      OutputText={edu.institute}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Degree"
                      OutputText={edu.degree}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Percentage"
                      OutputText={edu.percentage}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Pass Out Year"
                      OutputText={edu.pass_out_year}
                    />
                  </>
                ))}
              </div>
              <div className="CandidateDetails-infoDiv">
                {/* ----------------Experience---------------  */}
                {candidate.experience.map((exp, index) => (
                  <>
                    <h1>Experience</h1>
                    <OutputBox
                      key={index}
                      OutputTitle="Company"
                      OutputText={exp.company}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Project"
                      OutputText={exp.project}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Role"
                      OutputText={exp.role}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Team size"
                      OutputText={exp.team_size}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Duration From"
                      OutputText={exp.duration_from}
                    />
                    <OutputBox
                      key={index}
                      OutputTitle="Duration To"
                      OutputText={exp.duration_to}
                    />
                  </>
                ))}
              </div>
              {/* ----------------Skills---------------  */}
              <div className="CandidateDetails-infoDiv">
                <h1>Skills</h1>
                {candidate.skills.map((skill, index) => (
                  <OutputBox
                    key={index}
                    OutputText={`${skill.name} (Experience: ${skill.experience} months)`}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nothing-div">
            <img src={icon_nothing} />
            <p>
              Nothing to display, Please <br />
              Select candidate to view their details
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CandidateDetails;
