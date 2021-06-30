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
          <div className="subnav-content">
            <a href="#about">About</a>
            <a href="#partners">Partners</a>
            <a href="#mission">Mission</a>
            <a href="#team">Team</a>
            <a href="#mission">Mission</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="subnav">
          <NavLink to="/globalForum">
            <button className="subnavbtn">Global Forum</button>
          </NavLink>
          <div className="subnav-content">
            <a href="#link1">Link 7</a>
            <a href="#link2">Link 8</a>
            <a href="#link3">Link 9</a>
            <a href="#link4">Link 10</a>
            <a href="#link3">Link 11</a>
            <a href="#link4">Link 12</a>
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
