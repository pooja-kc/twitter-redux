import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";


const App = () => {
 
  return (
    <Router>
      <div className="navbar">
        <div className="Logo">  <Link to="/"><h5> Tweet </h5></Link></div>
        <div className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login" >Logout</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
