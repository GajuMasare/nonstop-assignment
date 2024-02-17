// src/App.js
import React, { useState, useEffect } from "react";
import Routes from "./routes";
import { getAllCandidates } from "./services/api";
import "./app.css";

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch all candidates from the API
    getAllCandidates()
      .then((data) => {
        setCandidates(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const onSelectCandidate = (id) => {
    // Set selected candidate based on ID
    const candidate = candidates.find((candidate) => candidate.id === id);
    setSelectedCandidate(candidate);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <Routes
          candidates={candidates}
          selectedCandidate={selectedCandidate}
          onSelectCandidate={onSelectCandidate}
        />
      )}
    </div>
  );
};

export default App;
