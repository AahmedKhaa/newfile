import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componenet/about";
import Home from "./componenet/Home";
import Login from "./componenet/Login";
import Signup from "./componenet/Signup";
import Basic from "./componenet/Basic";
import Event from "./componenet/Event";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
