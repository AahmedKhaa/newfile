import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/Home");
    }
  }, []);

  // async function submit(e) {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:9000/", {
  //       email,
  //       password,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // const handleLoginSubmit = (event) => {
  //   event.preventDefault();

  //   console.log("Logging in with email:", email, "and password:", password);
  //   navigate(`/Home`);
  // };
  async function handleLoginSubmit() {
    console.warn(email, password);
    let result = await fetch("http://localhost:9000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "aplication/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/Home");
  }

  return (
    <div className="login">
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" onClick={handleLoginSubmit}>
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
