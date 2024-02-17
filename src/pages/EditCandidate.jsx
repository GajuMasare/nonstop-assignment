// EditCandidate.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CandidateForm from "../components/CandidateForm";
import { getCandidateById, updateCandidate } from "../services/api";

const EditCandidate = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCandidateById(id)
      .then((data) => {
        setFormData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching candidate:", error);
        setLoading(false);
      });
  }, [id]);

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
    setFormData((prevState) => ({
      ...prevState,
      education: updatedEducation,
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCandidate(id, formData)
      .then(() => {
        // Redirect to home page after successful submission
        navigateTo("/home");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating candidate:", error);
      });
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        formData && (
          <CandidateForm
            formData={formData}
            handleChange={handleChange}
            handleEducationChange={handleEducationChange}
            handleSkillsChange={handleSkillsChange}
            handleExperienceChange={handleExperienceChange}
            handleSubmit={handleSubmit}
          />
        )
      )}
    </>
  );
};

export default EditCandidate;
