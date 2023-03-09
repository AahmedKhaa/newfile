import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(
      "Signing up with name:",
      name,
      "email:",
      email,
      "and password:",
      password
    );
    navigate(`/login`);
  };

  let signup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/signup", {
        name,
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
    console.log("Logging in with email:", email, "and password:", password);
    navigate(`/Login`);
  };
  let login = async () => {
    console.log("Logging in with email:", email, "and password:", password);
    navigate(`/Login`);
  };

  return (
    <div className="signup">
      <h2>Sign up</h2>
      <form>
        <label htmlFor="signup-name">Name:</label>
        <input
          type="text"
          id="signup-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="signup-email">Email:</label>
        <input
          type="email"
          id="signup-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="signup-password">Password:</label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <div className="up">
          <button type="submit" onClick={signup}>
            Sign up
          </button>
        </div>
        <br />
        <div className="down">
          <button type="submit" onClick={login}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default Signup;
