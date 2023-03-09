import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import Basic from "./Basic";

const Homepage = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const handleHomepageSubmit = (event) => {
    event.preventDefault();

    navigate(`/basic`);
  };
  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <h2>Enter the Event Details</h2>
      {/* <div className="button" onClick={() => setLoginUser({})}>
        welcome
      </div> */}
      <button type="submit" onClick={handleHomepageSubmit}>
        welcome
      </button>
    </div>
  );
};

export default Homepage;
