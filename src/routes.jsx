// routes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import EditCandidate from "./pages/EditCandidate";
import AddCandidate from "./pages/AddCandidate";

const AppRoutes = ({ candidates, selectedCandidate, onSelectCandidate }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              candidates={candidates}
              onSelectCandidate={onSelectCandidate}
              selectedCandidate={selectedCandidate}
            />
          }
        />
        <Route
          path="/candidate/new"
          element={
            <Home
              candidates={candidates}
              onSelectCandidate={onSelectCandidate}
              selectedCandidate={selectedCandidate}
            />
          }
        />
        <Route
          path="/candidate/:id"
          element={
            <Home
              candidates={candidates}
              onSelectCandidate={onSelectCandidate}
              selectedCandidate={selectedCandidate}
            />
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
