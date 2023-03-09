import React, { useEffect, useState } from "react";
import axios from "axios";
function Loggedin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    console.log(email);
    console.log(password);
  }

  return (
    <div className="loggedin">
      <h1>Login</h1>

      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email Address"
      />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />

      <button onClick={handleSubmit}>submit</button>

      {/* <form action="POST">
        <input type="email" placeholder="Email" name="" id=""></input>
        <input type="password" placeholder="password" name="" id=""></input>

        <input type="submit"></input>
      </form>
      <br />
      <p>OR</p>
      <br />

      <link to="./signup">Signup Page</link> */}
    </div>
  );
}
export default Loggedin;
