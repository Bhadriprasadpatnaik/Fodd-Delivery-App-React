import React from "react";
import Logo from "../Pages/HeaderComponents/Logo";
// import Home from './Home';
// import Search from './Search';
// import YourLibrary from './YourLibrary';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Fragment } from 'react';
// import { Link } from 'react-router-dom';

const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      <div className="logo">
        {/* <Logo /> */}
        <Router>
          <div className="leftcontent">
            <ul>
              <li>
                <span>
                  <i class="fas fa-home"></i>
                </span>
                &nbsp;&nbsp;
                <Link to="/userHome/music-home">Home</Link>
              </li>
              <li>
                <span>
                  <i class="fas fa-search"></i>
                </span>
                &nbsp;&nbsp;
                <Link to="/">Search</Link>
              </li>
              <li>
                <span>||\</span>&nbsp;&nbsp;
                <Link to="/">Your Library</Link>
              </li>
              <div style={{ marginxTop: "20px" }}>
                {/* <Link to="/" className="next" > */}
                <span style={{ color: "rgba(255, 255, 255, 0.692)" }}>
                  &nbsp;&nbsp;
                  <br />
                  &nbsp;&nbsp;
                  <i class="fas fa-plus-square"></i>
                </span>
                &nbsp;&nbsp;&nbsp;
                <Link to="/userHome/create-play-list">Create playlist</Link>
                {/* </Link> */}
              </div>
              <li>
                <span>
                  <i class="fas fa-heart"></i>
                </span>
                &nbsp;&nbsp;
                <Link to="/">Liked songs</Link>
              </li>
            </ul>
          </div>
          <div className="line"></div>
          <div className="nextContent">
            <ul>
              <li>
                <span>
                  <i class="far fa-arrow-alt-circle-down"></i>
                </span>
                &nbsp;&nbsp;
                <Link to="/">Install App</Link>
              </li>
            </ul>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default UserLeftBlock;
