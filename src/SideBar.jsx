import React from "react";
import "./SideBar.css";
import { FaHome, FaOdnoklassniki } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <div class="wrapper">
        <div class="sidebar">
          <ul>
            <Link to="/">
              <li>
                <span class="icon">
                  <FaHome />
                </span>
                <span class="item">Home</span>
              </li>
            </Link>
            <Link to="/">
            <li>
              <span class="icon">
                <FaOdnoklassniki />
              </span>
              <span class="item">Profile</span>
            </li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
