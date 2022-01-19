import React from "react";
import SideBar from "../SideBar/SideBar";
import Content from "../Content/Content";
import Trending from "../Trending/Trending";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home__Wrapper">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}
