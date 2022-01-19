import React from "react";
import "./SideBar.css";
import { FaHome, FaOdnoklassniki } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <Link to="/">
              <li>
                <span className="icon">
                  <FaHome />
                </span>
                <span className="item">Home</span>
              </li>
            </Link>
            <Link to="/profile">
            <li>
              <span className="icon">
                <FaOdnoklassniki />
              </span>
              <span className="item">Profile</span>
            </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
