// src/services/api.js

const BASE_URL = "https://60d5a2c2943aa60017768b01.mockapi.io";

// Function to fetch all candidates from the API
export const getAllCandidates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/candidate`);
    if (!response.ok) {
      throw new Error("Failed to fetch candidates");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to create a new candidate
export const createCandidate = async (candidateData) => {
  try {
    const response = await fetch(`${BASE_URL}/candidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidateData),
    });
    if (!response.ok) {
      throw new Error("Failed to create candidate");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to get a candidate by ID
export const getCandidateById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/candidate/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch candidate");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to update a candidate
export const updateCandidate = async (id, candidateData) => {
  try {
    const response = await fetch(`${BASE_URL}/candidate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidateData),
    });
    if (!response.ok) {
      throw new Error("Failed to update candidate");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Function to delete a candidate
export const deleteCandidate = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/candidate/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete candidate");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
