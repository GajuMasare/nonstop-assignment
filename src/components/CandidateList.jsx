// CandidateList.jsx
import React from "react";
import "../css/components/candidateList.css";

const CandidateList = ({ candidates, onSelectCandidate }) => {
  return (
    <div className="CandidateList-wrapper">
      <table className="CandidateList-table">
        <tr className="CandidateList-table-Header">
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>

        {candidates.map((candidate) => (
          <>
            <tr
              className="CandidateList-table-data"
              onClick={() => onSelectCandidate(candidate.id)}
            >
              <td key={candidate.id}>{candidate.name}</td>
              <td key={candidate.address}>{candidate.address}</td>
              <td key={candidate.phone}>{candidate.phone}</td>
              <td key={candidate.email}>{candidate.email}</td>
              <td key={candidate.gender}>{candidate.gender}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default CandidateList;
