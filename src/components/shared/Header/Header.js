import React, { useState } from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import logo1 from "../../../static/img/logo1.svg";
import logo2 from "../../../static/img/forum.svg";
import logo3 from "../../../static/img/Untitled-6.svg";
import "./header.css";
import logo from "../../../static/img/comunity.svg";

const Header = () => {
  const [activeCommunity, setActiveCommunity] = useState(true);
  const [activeForum, setActiveForum] = useState(false);
  const styleIcon = { fontSize: "25px" };
  return (
    <header className="header">
      <div className="logo-wrap">
        <img src={activeForum ? logo3 : logo1} alt="buissup logo" />
      </div>
      <div className="navbar">
        <div className="subnav">
          <NavLink to="/" exact activeClassName="active">
            <button
              className="subnavbtn"
              onClick={() => {
                setActiveForum(false);
                setActiveCommunity(true);
              }}
            >
              Community
            </button>
          </NavLink>
          <div
            className="subnav-content"
            style={{
              justifyContent: "space-around",
              display: activeCommunity ? "flex" : "none",
            }}
          >
            {/* <div
              className="logo-wrap"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <img src={logo} alt="buissup logo" />
            </div> */}
            <div>
              <a href="#intro">Գլխավոր</a>
              <a href="#about">Մեր մասին</a>
              <a href="#infos">Նպատակ</a>
              <a href="#admins">Թիմ</a>
              <a href="#contacts">Հետադարձ կապ</a>
            </div>
          </div>
        </div>
        <div className="subnav">
          <NavLink
            to="/globalForum"
            isActive={() => {
              //setActiveCommunity(false);
              // setActiveForum(true);
            }}
          >
            <button
              className="subnavbtn"
              onClick={() => {
                setActiveCommunity(false);
                setActiveForum(true);
                console.log(activeCommunity);
              }}
            >
              Global Forum
            </button>
          </NavLink>
          <div
            className="subnav-content"
            style={{ display: activeForum ? "flex" : "none" }}
          >
            {/*  <div
              className="logo-wrap"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <img src={logo} alt="buissup logo" />
            </div> */}
            <a href="#intro">Գլխավոր</a>
            <a href="#iconsWithImage">Ծրագրի մասին</a>
            <a href="#buissUpHeading">ՈՒղղություններ</a>
            <a href="#stepsSection">Մասնակցության ուղղեցույց</a>
            <a href="#contacts">Հետադարձ կապ</a>
          </div>
        </div>
        <div className="subnav">
          <NavLink to="/conference">
            {" "}
            <button className="subnavbtn">Conference</button>
          </NavLink>
          <div className="subnav-content">
            <a href="#link1">Link 13</a>
            <a href="#link2">Link 14</a>
            <a href="#link3">Link 15</a>
            <a href="#link4">Link 16</a>
            <a href="#link3">Link 17</a>
            <a href="#link4">Link 18</a>
          </div>
        </div>
        <div className="subnav">
          <NavLink to="/accelerator">
            {" "}
            <button className="subnavbtn">Accelerator</button>
          </NavLink>
          <div className="subnav-content">
            <a href="#link1">Link 19</a>
            <a href="#link2">Link 20</a>
            <a href="#link3">Link 21</a>
            <a href="#link4">Link 22</a>
            <a href="#link3">Link 23</a>
            <a href="#link4">Link 24</a>
          </div>
        </div>
      </div>
      <div className="soc-wrap">
        <FontAwesomeIcon icon={faFacebook} style={styleIcon} />
        <FontAwesomeIcon icon={faInstagram} style={styleIcon} />
        <FontAwesomeIcon icon={faLinkedinIn} style={styleIcon} />
      </div>
    </header>
  );
};
export default React.memo(Header);
