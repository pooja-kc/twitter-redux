import React, { useEffect } from "react";
import SideBar from "./SideBar";

import Trending from "./Trending";

import { connect } from "react-redux";

function Profile({ profi }) {
  return !profi ? (
    <center>
      <h1>Try Login</h1>
    </center>
  ) : (
    <div className="Home__Wrapper">
      <div className="sidebar">
        <SideBar />
      </div>
      <center>
        <div className="content">
          <div className="profile-content">
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.AdoJAsiWdwMNG0ZTvUoTUQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                alt=""
              />
            </div>

            <h1 className="user_name">{profi.name}</h1>
            <br />
            <h3>{profi.email}</h3>
            <br />
          </div>
        </div>
      </center>
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    profi: state.currentUser.user,
  };
};

export default connect(mapStateToProps)(Profile);
