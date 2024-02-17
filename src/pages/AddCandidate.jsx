// AddCandidate.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateForm from "../components/CandidateForm";
import { createCandidate } from "../services/api";

const AddCandidate = () => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    profile_picture: "",
    name: "",
    email: "",
    gender: "",
    address: "",
    phone: "",
    hobbies: [],
    education: [
      { institute: "", degree: "", percentage: "", pass_out_year: "" },
    ],
    skills: [{ name: "", experience: "" }],
    experience: [
      {
        company: "",
        project: "",
        role: "",
        team_size: "",
        duration_from: "",
        duration_to: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleSkillsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...formData.skills];
    updatedSkills[index][name] = value;
    setFormData((prevState) => ({
      ...prevState,
      skills: updatedSkills,
    }));
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][name] = value;
    setFormData((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  };

  const addEducationField = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { institute: "", degree: "", percentage: "", pass_out_year: "" },
      ],
    });
  };

  const addExperienceField = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: "",
          project: "",
          role: "",
          team_size: "",
          duration_from: "",
          duration_to: "",
        },
      ],
    });
  };

  const addSkillField = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      skills: [
        ...formData.skills,
        {
          name: "",
          experience: "",
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      await createCandidate(formData);
      // Redirect to home page after successful submission
      // navigateTo("/home");
      // window.location.reload();
    } catch (error) {
      console.error("Error creating candidate:", error);
    }
  };

  return (
    <CandidateForm
      formData={formData}
      handleChange={handleChange}
      handleEducationChange={handleEducationChange}
      handleSkillsChange={handleSkillsChange}
      handleExperienceChange={handleExperienceChange}
      handleSubmit={handleSubmit}
      addEducationField={addEducationField}
      addExperienceField={addExperienceField}
      addSkillField={addSkillField}
    />
  );
};

export default AddCandidate;
