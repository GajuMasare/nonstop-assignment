// src/pages/Home.js
import React, { useEffect, useState } from "react";
import CandidateList from "../components/CandidateList";
import CandidateDetails from "../components/CandidateDetails";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/pages/home.css";
import AddCandidate from "./AddCandidate";
import Button1 from "../components/UiCom/Button1";
import EditCandidate from "./EditCandidate";

const Home = ({ candidates, selectedCandidate, onSelectCandidate }) => {
  const URL = useLocation().pathname;
  const [screen, setScreen] = useState([
    <CandidateDetails candidate={selectedCandidate} />,
  ]);

  useEffect(() => {
    if (URL === "/home") {
      setScreen(<CandidateDetails candidate={selectedCandidate} />);
    } else if (URL === "/candidate/new") {
      setScreen(
        <AddCandidate
          candidates={candidates}
          selectedCandidate={selectedCandidate}
          onSelectCandidate={onSelectCandidate}
        />
      );
    } else if (URL === `/candidate/${selectedCandidate.id}`) {
      setScreen(
        <EditCandidate
          candidates={candidates}
          selectedCandidate={selectedCandidate}
          onSelectCandidate={onSelectCandidate}
        />
      );
    }
  }, [URL, selectedCandidate]);

  return (
    <div className="home-container">
      <div className="left-section-mainDiv">
        <div className="left-section">
          <div className="left-section-canTextDiv">
            <h2 className="left-section-canText">List of Canditate</h2>
            <Button1 goToLink="/candidate/new" BtnTitle="New Candidate" />
          </div>
          <CandidateList
            candidates={candidates}
            onSelectCandidate={onSelectCandidate}
          />
        </div>
      </div>
      <div className="right-section-mainDiv">
        <div className="right-section">{screen}</div>
      </div>
    </div>
  );
};

export default Home;
