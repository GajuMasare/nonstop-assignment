// src/components/CandidateForm.js
import React, { useState } from "react";
import "../css/components/candidateForm.css";
import InputBox from "./UiCom/InputBox";
import defaultPfp from "/noPfp.png";
import "../css/components/UiCom/buttons.css";
import Button2 from "./UiCom/Button2";
import Button4 from "./UiCom/Button4";
import Button1 from "./UiCom/Button1";
import Button5 from "./UiCom/Button5";

const CandidateForm = ({
  formData,
  handleChange,
  handleEducationChange,
  handleSkillsChange,
  handleExperienceChange,
  handleSubmit,
  addEducationField,
  addExperienceField,
  addSkillField,
}) => {
  return (
    <form onSubmit={handleSubmit} className="CandidateForm-mainDiv">
      <div className="CandidateForm-subDiv">
        <div className="CandidateForm-leftDiv">
          <div className="CandidateForm-pfpDiv">
            <img
              src={
                formData.profile_picture ? formData.profile_picture : defaultPfp
              }
            />
            <Button5 BtnTitle="Upload Picture" />
            <div className="CandidateForm-btnsDiv"></div>
          </div>
        </div>
        <div className="CandidateForm-rightDiv">
          <div className="CandidateForm-infoDiv">
            {/* ----------------about---------------  */}
            <h1>About</h1>
            <InputBox
              type="text"
              lable="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputBox
              type="email"
              lable="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputBox
              type="text"
              lable="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <InputBox
              type="number"
              lable="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputBox
              type="gender"
              lable="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <InputBox
              type="text"
              lable="Hobbies (comma-separated)"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
            />
          </div>
          {/* ----------------Education---------------  */}
          <div className="CandidateForm-infoDiv">
            {formData.education.map((edu, index) => (
              <div key={index}>
                <h1>Education</h1>
                <InputBox
                  type="text"
                  lable="institute"
                  name="institute"
                  value={edu.institute}
                  onChange={(e) => handleEducationChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Degree"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Percentage"
                  name="percentage"
                  value={edu.percentage}
                  onChange={(e) => handleEducationChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Year of Graduation"
                  name="pass_out_year"
                  value={edu.pass_out_year}
                  onChange={(e) => handleEducationChange(e, index)}
                />
              </div>
            ))}
            <Button4 BtnTitle="Add Education" AddStuff={addEducationField} />
          </div>
          {/* ----------------Experience---------------  */}
          <div className="CandidateForm-infoDiv">
            {formData.experience.map((exp, index) => (
              <div key={index}>
                <h1>Experience</h1>
                <InputBox
                  type="text"
                  lable="Company"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Project"
                  name="project"
                  value={exp.project}
                  onChange={(e) => handleExperienceChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Role"
                  name="role"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(e, index)}
                />
                <InputBox
                  type="number"
                  lable="Team size"
                  name="team_size"
                  value={exp.team_size}
                  onChange={(e) => handleExperienceChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Duration (from)"
                  name="duration_from"
                  value={exp.duration_from}
                  onChange={(e) => handleExperienceChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Duration (to)"
                  name="duration_to"
                  value={exp.duration_to}
                  onChange={(e) => handleExperienceChange(e, index)}
                />
              </div>
            ))}
            <Button4 BtnTitle="Add Experience" AddStuff={addExperienceField} />
          </div>
          {/* ----------------Skills---------------  */}
          <div className="CandidateForm-infoDiv">
            {formData.skills.map((Ski, index) => (
              <div key={index}>
                <h1>Skills</h1>
                <InputBox
                  type="text"
                  lable="Name"
                  name="name"
                  value={Ski.name}
                  onChange={(e) => handleSkillsChange(e, index)}
                />
                <InputBox
                  type="text"
                  lable="Experience (Years)"
                  name="experience"
                  value={Ski.experience}
                  onChange={(e) => handleSkillsChange(e, index)}
                />
              </div>
            ))}
            <Button4 BtnTitle="Add Experience" AddStuff={addSkillField} />
          </div>
          <button className="CandidateForm-submitbtn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CandidateForm;
