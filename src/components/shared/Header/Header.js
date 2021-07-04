import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import logo1 from "../../../static/img/logo1.svg";
import "./header.css";
import logo from "../../../static/img/comunity.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrap">
        <img src={logo1} alt="buissup logo" />
      </div>
      <div className="navbar">
        <div className="subnav">
          <NavLink to="/" exact>
            <button className="subnavbtn">Community</button>
          </NavLink>
          <div
            className="subnav-content"
            style={{ justifyContent: "space-around" }}
          >
            <div
              className="logo-wrap"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <img src={logo} alt="buissup logo" />
            </div>
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
          <NavLink to="/globalForum">
            <button className="subnavbtn">Global Forum</button>
          </NavLink>
          <div className="subnav-content">
            <div
              className="logo-wrap"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <img src={logo} alt="buissup logo" />
            </div>
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
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
    </header>
  );
};
export default React.memo(Header);
