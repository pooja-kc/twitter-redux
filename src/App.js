import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import store from './Redux/store';

import {userLogged} from './Redux/actions'
store.dispatch(userLogged("user added"))
console.log("store", store.getState());

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="Logo"> <h5> LOGO </h5></div>
        <div className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
